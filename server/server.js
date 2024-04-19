import express from "express";
import dotenv from "dotenv";
import getValMatches from './utils/valscraper.js';
dotenv.config();
import cors from "cors";
import { createClient } from "redis";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const client = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect();

app.get('/api/get-val', async (req, res) => {
  try {
    client.flushDb(); // start with fresh db (for testing purposes for now)
    const data = await getValMatches();
    data.forEach((match) => {
      const matchId = match.name + " - " + match.date;
      const matchData = {
        team: match.name,
        date: match.date,
        event: match.event
      };
      try {
        client.hSet(matchId, matchData);
      } catch (err) {
        return console.error(err);
      }
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
})