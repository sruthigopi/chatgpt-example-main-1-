// import express, { Request, Response } from "express";
require('dotenv').config();
const axios = require('axios');
// const { json } = require('body-parser');
const BASE_PATH = `https://graph.microsoft.com/v1.0/sites`;
const Site_Id='0dcfb1ab-e654-4ddb-a833-6047bcd0a437'
const Leaverequest_Id='6a70731a-dfb9-42f5-9b37-e21ac21dd7af';

//  const saveData=()=>{
//     const token = req.headers.authorization
//     console.log(token);
//     // graphAPI
//     if(!token){
//       return res.status(404).json({
//         success: false,
//         error: "No Token found"
//       });
//     }
//     else{
//       const Data= req.body
// axios.post(`${BASE_PATH}/${Site_Id}/lists/${Announcement_Id}/items`,{Data} )
// .then((res) => {
//       setResponse(res.data);
      
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
//  }

 const saveData=async(req, res) =>{
  const token = req.headers.authorization
  console.log(req.body);
  console.log(token);
  const {Title,EmployeeName,LeaveType}=req.body
  // graphAPI
  if(!token){
    return res.status(404).json({
      success: false,
      error: "No Token found"
    });
  }
  else{
    // const Data= req.body
// axios.post(`${BASE_PATH}/${Site_Id}/lists/${Announcement_Id}/items`,{Data} )
// .then((res) => {
    
    
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const Data = {
  "fields": {
    "Title":"title",
    "EmployeeName": EmployeeName,
    "LeaveType":LeaveType,
  
  }
}

try {
 
  
  const response =await fetch(`${BASE_PATH}/${Site_Id}/lists/${Leaverequest_Id}/items`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(Data)
  });
// const response=await axios.post(`${BASE_PATH}/${Site_Id}/lists/${Leaverequest_Id}/items`,  
// Data,
// { headers: {
//   'Authorization': `Bearer ${token}`,
//   'Content-Type': 'application/json'
// }},)

  // const data = response.json();
  console.log(response)
  // enter you logic when the fetch is successful
  // console.log(data);
  console.log('data added sucessfully');
  res.status(200).json({
     success: true,
   response :response.status,
   });
  // return data
} catch (error) {
  // enter your logic for when there is an error (ex. error toast)

  console.log(error)
  console.log('error occured while adding data');
}

}
}


module.exports =saveData
    