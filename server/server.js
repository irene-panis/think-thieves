import express from "express";
import dotenv from "dotenv";
import getValMatches from './utils/valscraper.js';
dotenv.config();
import cors from "cors";
import { createClient } from 'redis';
import getLeagueMatches from "./utils/leaguescraper.js";
import getCodMatches from "./utils/codscraper.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const client = createClient();
client.on('error', err => console.log('Redis Client Error', err));
await client.connect();

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
    client.expire("LoL", Math.floor(matches[0].matchData.exp)); // set expiration to nearest match time
    // cache expires after nearest match arrives
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
    client.expire("COD", Math.floor(matches[0].matchData.exp));
    console.log("Cache Miss - COD");
    return res.json(data);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
})