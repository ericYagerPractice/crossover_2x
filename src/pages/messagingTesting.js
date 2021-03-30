import React, { useState, useEffect, Component } from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon, MDBBtn, MDBTypography} from "mdbreact";
import NewMessageModal from '../components/C2XChat/NewMessageModal'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import {onAuthUIStateChange } from '@aws-amplify/ui-components';
import { listConversations } from '../graphql/queries'
import "./Messaging.css";

//const messageStage = { name:'',message:'',when:'',toRespond:'',seen:'',active:'' }

function Messaging(){
  //const [messages, setMessages] = useState([messageStage])
  const [user, setUser] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try{
      //API calls
      const userID = await Auth.currentSession();
      const messagingData = await API.graphql(graphqlOperation(listConversations))
      console.log("User ID: ", userID)
      console.log("Messages: ",messagingData)
      setUser(userID.accessToken.payload.username)

    }catch(err){
        console.log("Error w/ offering retrieval: ", err)
    }
  }

  return(
    <div>{user}</div>
  )
}

export default Messaging;