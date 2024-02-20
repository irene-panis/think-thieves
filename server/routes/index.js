import express from 'express';
const router = express.Router();

import scraper from './scrapers';

router.get('/api/get-val', scraper.getVal);

export default router;