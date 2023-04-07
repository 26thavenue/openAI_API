const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

router
.get('/', (req, res) => {
    res.send('Welcome to the open ai api');
})

.get('/sample', async(req, res) => {
  const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{
    role: "user", 
    content: "Define polymorphism in 3 lines"}],
});
res.json(completion.data.choices[0].message)

})

//DALL-E API GENERRATOR
.get('/image', async (req, res) => {
 const response = await openai.createImage({
  prompt: "A cute baby sea otter",
  n: 2,
  size: "1024x1024",
});
res.send(response.data)
})


//MAKING POSTS REQUESTS
router.post()

module.exports = router;