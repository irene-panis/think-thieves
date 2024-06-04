import express from "express";
import dotenv from "dotenv";
import path from "path";
const __dirname = import.meta.dirname;
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import cors from "cors";
import { createClient } from 'redis';
import { register } from 'swiper/element/bundle';
register(); // register swiper elements

import getValMatches from './utils/valscraper.js';
import getLeagueMatches from "./utils/leaguescraper.js";
import getCodMatches from "./utils/codscraper.js";
import { getStreams } from "./utils/getStreams.js";
import { getTwitchToken } from "./utils/getTwitchToken.js";
import getYoutubeStreams from "./utils/ytScraper.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const client = createClient({
  url: process.env.REDIS_TLS_URL,
  socket: {
    tls: true,
    rejectUnauthorized: false, 
  },
});
client.on('error', err => console.log('Redis Client Error', err));
await client.connect();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../', 'dist')));
}

let matchNumber = 0; // start matchNumber at 0
// this is for uniquely identifying matches
// handles edge case of matches against same team on same day etc

app.get('/api/get-val', async (req, res) => {
  // add redis check and grabbing from cache
  const cache = await client.hGetAll("VALORANT");
  if (Object.keys(cache).length !== 0) { // cache contains data, grab from redis
    const matchesArray = [];
    const matchesField = JSON.parse(cache.matches);
    matchesField.forEach((match) => {
      matchesArray.push(match.matchData);
    });
    console.log("Cache Hit - VALORANT");
    return res.json(matchesArray);
  } else {
    const data = await getValMatches();
    if (data.length === 0) {
      client.hSet("VALORANT", "matches", "[]");
      client.expire("VALORANT", 60);
      console.log("Cache Miss - VALORANT");
      return res.json(data);
    }
    const matches = [];
    data.forEach((match) => {
      const matchId = match.name + " " + matchNumber;
      matchNumber++; // count up
      matches.push({
        matchId: matchId,
        matchData: match
      });
    });
    client.hSet("VALORANT", "matches", JSON.stringify(matches));
    client.expire("VALORANT", 60);
    console.log("Cache Miss - VALORANT");
    return res.json(data);
  }
});

app.get('/api/get-lol', async (req, res) => {
  // add redis check and grabbing from cache
  const cache = await client.hGetAll("LoL");
  if (Object.keys(cache).length !== 0) { // cache contains data, grab from redis
    const matchesArray = [];
    const matchesField = JSON.parse(cache.matches);
    matchesField.forEach((match) => {
      matchesArray.push(match.matchData);
    });
    console.log("Cache Hit - LoL");
    return res.json(matchesArray);
  } else {
    const data = await getLeagueMatches();
    if (data.length === 0) { // if no upcoming matches we set LoL matches to empty array
      client.hSet("LoL", "matches", "[]");
      client.expire("LoL", 86400); // expires after 1 day
      // we basically want the empty array to be remembered/cached
      // but we have no info on nearest match time bc no matches so just set exp = 1 day
      console.log("Cache Miss - LoL");
      return res.json(data);
    }
    const matches = [];
    data.forEach((match) => {
      const matchId = match.name + " " + matchNumber;
      matchNumber++; // count up
      matches.push({
        matchId: matchId,
        matchData: match
      });
    });
    client.hSet("LoL", "matches", JSON.stringify(matches));
    if (matches[0].matchData.exp < 0) { // account for currently live matches
      client.expire("LoL", 86400); // set expiration to 1 day
    } else {
      client.expire("LoL", Math.floor(matches[0].matchData.exp)); // set expiration to nearest match time
      // cache expires after nearest match arrives
    }
    console.log("Cache Miss - LoL");
    return res.json(data);
  }
});

app.get('/api/get-cod', async (req, res) => {
  // add redis check and grabbing from cache
  const cache = await client.hGetAll("COD");
  if (Object.keys(cache).length !== 0) { // cache contains data, grab from redis
    const matchesArray = [];
    const matchesField = JSON.parse(cache.matches);
    matchesField.forEach((match) => {
      matchesArray.push(match.matchData);
    });
    console.log("Cache Hit - COD");
    return res.json(matchesArray);
  } else {
    const data = await getCodMatches();
    if (data.length === 0) {
      client.hSet("COD", "matches", "[]");
      client.expire("COD", 86400);
      console.log("Cache Miss - COD");
      return res.json(data);
    }
    const matches = [];
    data.forEach((match) => {
      const matchId = match.name + " " + matchNumber;
      matchNumber++; // count up
      matches.push({
        matchId: matchId,
        matchData: match
      });
    });
    client.hSet("COD", "matches", JSON.stringify(matches));
    if (matches[0].matchData.exp < 0) { // account for currently live matches
      client.expire("COD", 86400); // set expiration to 1 day
    } else {
      client.expire("COD", Math.floor(matches[0].matchData.exp));
    }
    console.log("Cache Miss - COD");
    return res.json(data);
  }
});

app.get('/api/get-streams/:roster', async (req, res) => {
  let token = await client.get('TWITCH_TOKEN');
  if (!token) {
    const newToken = await getTwitchToken();
    client.set('TWITCH_TOKEN', newToken.access_token);
    client.expire('TWITCH_TOKEN', newToken.expires_in);
    token = newToken.access_token;
    console.log("New Token Generated");
  }
  const cache = await client.hGetAll(req.params.roster + " STREAMS");
  if (Object.keys(cache).length !== 0) { // cache contains data, grab from redis
    const streamsArray = [];
    const streamsField = JSON.parse(cache.streams);
    streamsField.forEach((stream) => {
      streamsArray.push(stream);
    });
    console.log("Cache Hit - " + req.params.roster + " STREAMS");
    return res.json(streamsArray);
  } else {
    const twitchData = await getStreams(token, req.params.roster);
    let youtubeData;
    if (req.params.roster === "CONTENT") {
      youtubeData = await getYoutubeStreams();
    } else {
      youtubeData = [];
    }
    if (twitchData.data.length === 0 && youtubeData.length === 0) {
      client.hSet(req.params.roster + " STREAMS", "streams", "[]");
      client.expire(req.params.roster + " STREAMS", 300);
      console.log("Cache Miss - " + req.params.roster + " STREAMS");
      return res.json([]);
    }
    const streams = [];
    if (twitchData.data.length !== 0) {
      twitchData.data.forEach((stream) => {
        streams.push({
          streamName: stream.user_name,
          streamData: stream
        });
      });
    }
    if (youtubeData.length !== 0) {
      youtubeData.forEach((stream) => {
        streams.push({
          streamName: stream.user_name,
          streamData: stream
        });
      });
    }
    client.hSet(req.params.roster + " STREAMS", "streams", JSON.stringify(streams));
    client.expire(req.params.roster + " STREAMS", 300);
    console.log("Cache Miss - " + req.params.roster + " STREAMS");
    return res.json(streams);
  }
});

// catch-all route that serves index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
})