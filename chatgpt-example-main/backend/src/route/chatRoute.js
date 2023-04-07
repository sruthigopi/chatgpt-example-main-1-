const express = require("express");
const router = express.Router();
const fs=require('fs');
const new_data = require('../../newChat.json');
const { Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({
    apiKey: process.env.API_KEY
});
const openai = new OpenAIApi(configuration);

function savefile(req){
    const chatdata=require('../../chat.json');
   
    let chat =`${req.body.message}`;
       chatdata.push({chat});

       fs.writeFile("./chat.json", JSON.stringify(chatdata,null,2), err => {
       // Checking for errors   
       if (err) throw err;
        // console.log("Done writing"); // Success  });      
  })
  }
//   start
  const data = fs.readFileSync("chat.json");
  const jsonData = JSON.parse(data);
  
  const fieldNameMap = {
     "i":jsonData[0].chat,
   "Type" :jsonData[1].chat ,
   "Days": jsonData[2].chat,
   "StartingDate": jsonData[3].chat,
   "EndingDate": jsonData[4].chat,
   "Reason":jsonData[5].chat
  };
 
 fieldNameMap.isApproved = false;
 console.log(fieldNameMap);
 const fieldJson = JSON.stringify(fieldNameMap);
 console.log(fieldJson);
// save to new file
// fs.writeFile('./newChat.json', JSON.stringify(fieldNameMap,null,2), err => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
 
router.post('/', async (req,res)=>{
    const {message} = req.body;
    // console.log({message})
    try {

        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt: `Pretend you are manager who provide leave to employess and ask for following details.
          
            Manager:  Hello! How can I help you with your leave request today?
            person: Hi! I need to request some time off.
    
            Manager: Sure, I'd be happy to help. Can you tell me what type of leave you are requesting? (e.g. vacation, sick leave, personal leave)
            person: I need to take a vacation.

            Manager: How many days of leave are you applying for?
            person: a week

            Manager: Great! When would you like your leave to start? (Please provide a date in the format DD/MM/YYYY)
            person: 28/3/2023.
           
            Manager:  Got it. Can you please provide a brief reason for your leave?
            person: I need some time off to visit family.

            Manager:  Okay, and when would you like your leave to end? (Please provide a date in the format DD/MM/YYYY)
            person: 27/3/2024.
               
            Manager: Thank you for the information. I will submit your leave request to HR for approval.
            \n\n person:${message}
            Manager:`,
            temperature: 0.3,
            max_tokens: 1024,
            
            n:1,
            // stop: '\n',
        });
        //  manager:Alright, I have all the necessary details. Your request will be processed shortly.
        // res.send(response.data.choices[0].text.trim());
         res.json({
            message:response.data.choices[0].text.trim()
         })
    } catch (err) {
        res.status(err?.response?.status ?? 400).json(err?.response?.data ?? {error: {message: "Failed to fetch message."}})
    }
    savefile(req);
});

module.exports = router;