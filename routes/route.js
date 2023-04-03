const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

const router = express.Router();

router.route.get('/api/v1', (req, res) => {
    res.send('Welcome to the open ai api');
})