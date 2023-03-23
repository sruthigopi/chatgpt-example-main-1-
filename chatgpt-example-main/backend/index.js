// const { Configuration, OpenAIApi} = require("openai");
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();

const chatbot = require('./src/route/chatRoute');
const saveData =require('./src/route/graphApi');

const app=express();
app.use(bodyParser.json(),
        cors());
const port=3080;

app.use("/chat",chatbot);
app.use('/savechat',saveData);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);    
});
