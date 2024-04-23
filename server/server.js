import express from "express";
import dotenv from "dotenv";
import getValMatches from './utils/valscraper.js';
dotenv.config();
import cors from "cors";
import { createClient } from 'redis';

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
    const matchesArray = JSON.parse(cache.matches);
    console.log(matchesArray);
    console.log("Cache Hit");
    return res.json(matchesArray);
  } else {
    const data = await getValMatches();
    const matches = [];
    data.forEach((match) => {
      const matchId = match.name + " " + matchNumber;
      matchNumber++; // count up
      const matchData = {
        team: match.name,
        date: match.date,
        event: match.event
      };
      matches.push({
        matchId: matchId,
        matchData: matchData
      });
    });
    client.hSet("VALORANT", "matches", JSON.stringify(matches));
    client.expire("VALORANT", 60);
    console.log("Cache Miss");
    return res.json(data);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
})