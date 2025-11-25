import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Client } from "@stomp/stompjs";
import axios from "axios";
import { verified } from "./Redux/AuthRedux";



export default function Notification() {
 
  const userEmail = useSelector((state) => state.auth.user?.email);
  const clientRef = useRef(null); 

  const dispatch = useDispatch();
    

  useEffect(() => {

     if (clientRef.current) return;

    

    const client = new Client({
      brokerURL:"ws://localhost:8080/ws",
      onConnect: () => {
    
      if (clientRef.current?.subscribed) return; 
        clientRef.current.subscribed = true;

        console.log("connected")

          client.subscribe(`/topic/notifications/${userEmail}`, (message) => {
          const notification = JSON.parse(message.body);
          dispatch(verified());


      });
    },

      onStompError: (frame) => console.error("STOMP error:", frame),
     
    });

    client.activate();
     clientRef.current = client;

  return () => {
    clientRef.current?.deactivate();
    clientRef.current = null;
    console.log("disconnect");
   
  };
  
  }, []);

  return (
    <div></div>
  );

}




