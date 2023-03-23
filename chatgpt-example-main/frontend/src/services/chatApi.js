import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {AccessToken} from '../App'
import {AccessToken} from '../components/pageLayout'
// console.log(AccessToken);


// import { Chat } from "../models/chat.model";

export const chatApi=createApi({
  reducerPath: 'chatApi',
  
  // rtk 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3080/' ,
  prepareHeaders: (headers ,{ getState }) => {
          
  headers.set('Content-Type', 'application/json');
  headers.set("authorization", `${AccessToken}`);
  console.log("headers in the rtk query",headers);
  return headers;
 
},}),
  
endpoints: (builder) => ({
  // get request to server
  getChat: builder.query({
    query: () => '/',
    
  }),

  addChat : builder.mutation({
      query: chat =>({
          url:'/chat',
          method:'POST',
          body:chat,
         
      })
  }),
  saveChat : builder.mutation({
    query: data =>({
      url:'/savechat',
          method:'POST',
          // body:`${AccessToken}`,
          body:data,
          // headers      
    })
  }),
  getChatdata: builder.query({
    query: () => ({
    url:'/savedata',
    method: 'GET',
    })
  }),
}),
})


export const { useGetChatQuery,useAddChatMutation, useSaveChatMutation,useGetChatdataQuery } = chatApi;