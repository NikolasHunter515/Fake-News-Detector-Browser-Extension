const express = require('express');
const axios = require('axios');

const geminiRouter = express.Router();

geminiRouter.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Missing "text" in request body.' });
    }
    const response = await axios.post('http://localhost:5000/analyze', { text });
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to communicate with Python microservice.' });
  }
});

module.exports = geminiRouter;
