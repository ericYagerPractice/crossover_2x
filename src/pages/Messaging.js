import Amplify, { API } from 'aws-amplify';
import React, { Component } from "react";
import { MDBContainer} from "mdbreact";
import "./Messaging.css";

export function getData() { 
  const apiName = 'c2xMessaging';
  const path = '/Messaging';
  const myInit = { 
    headers: {
      "Access-Control-Allow-Origin": "*",
      
  }, 
  };

  return API.get(apiName, path, myInit);
}



function Messaging() {
  getData().then(response=>console.log(response));
  return(
    <MDBContainer>
      Hello this is messaging, go to console
    </MDBContainer>
  );
  
}

export default Messaging;
