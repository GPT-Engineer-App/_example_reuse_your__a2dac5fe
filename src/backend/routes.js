const express = require('express');
const router = express.Router();
const axios = require('axios');
const { GoogleSearch } = require('serpapi');

router.post('/generate', async (req, res) => {
  // Example of using OpenAI and SERP API
  res.json({ message: 'API is working' });
});

module.exports = router;