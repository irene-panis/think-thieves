import express from "express";
import dotenv from "dotenv";
import getValMatches from './utils/valscraper.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/get-val', async (req, res) => {
  try {
    const data = await getValMatches();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
})