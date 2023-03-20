// const { Configuration, OpenAIApi} = require("openai");
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();
// const configuration = new Configuration({
//     apiKey: process.env.API_KEY
// });
// const openai = new OpenAIApi(configuration);
const chatbot = require('./src/route/chatRoute');

const app=express();
app.use(bodyParser.json(),
        cors());
const port=3080;

app.use("/chat",chatbot);

// app.post('/chat', async (req,res)=>{
//     const {message} = req.body;
//     try {
//         const response = await openai.createCompletion({
//             model:"text-davinci-003",
//             prompt: `pretent you are manager who provide leave to employess.ask for details,
//             \n\n leave type
//             \n\n reason
//             \n\n duration
//             \n\n starting date
//            employee: ${message}`,
//             temperature: 0.7,
//             max_tokens: 50,
//             n:1
//         });
//         // res.send(response.data.choices[0].text.trim());
//          res.json({
//             message:response.data.choices[0].text.trim()
//          })
//     } catch (err) {
//         res.status(err?.response?.status ?? 400).json(err?.response?.data ?? {error: {message: "Failed to fetch message."}})
//     }
// });

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);    
});
