import { getValMatches } from "../utils/valscraper";

const scraper = {
  getVal: async (req, res) => {
    try {
      const data = await getValMatches();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: "Error grabbing VAL matches"});
    }
  }
}

export default scraper;