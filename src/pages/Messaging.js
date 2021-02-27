
import { returnUser, fetchUserEmails } from '../CheckAuth';
import React, { Component } from "react";
import { MDBContainer, MDBSelect, MDBInput, MDBCol, MDBRow, MDBBtn, MDBIcon} from "mdbreact";
import { createMessage} from '../graphql/mutations'
import { API, graphqlOperation, Auth, Hub } from 'aws-amplify'
import Lambda from 'aws-sdk/clients/lambda';
import "./Messaging.css";

const states = fetchUserEmails();

class Messaging extends Component {
  state = { 
      recipients: [],
      initiator:"",
      initiatorID:"",
      recipient: {},
      messageText: "",    
    };

  async componentDidMount() {
    let nextToken;
    let apiName = 'AdminQueries';
    let path = '/listUsersInGroup';
    let currentUser = await Auth.currentSession()
    let myInit = { 
        queryStringParameters: {
          "groupname": "Admin",
          "limit": 10,
          "token": nextToken
        },
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `${(currentUser).getAccessToken().getJwtToken()}`
        }
    }
    const { NextToken, ...rest } =  await API.get(apiName, path, myInit);
    nextToken = NextToken;
    let userEmails = rest.Users.map(data=>data.Username)
    let userIDs = rest.Users.map(data=>data.Attributes[0].Value)

    console.log(userIDs)
    let stageOptions = []
    for(var email in userEmails) stageOptions.push({text:userEmails[email],value:{userName: userEmails[email], userID: userIDs[email]}})
    this.setState({recipients:stageOptions})
    this.setState({initiator:currentUser.accessToken.payload.username})
    this.setState({initiatorID:currentUser.accessToken.payload.sub})
  }

  emailValue = value => {
    console.log(value[0])
    this.setState({recipient:value})
  };

  messageValue = value => {
    this.setState({messageText:value})
  };

  clickEvent = () => {
    //await API.graphql(graphqlOperation(createMessage, {input: {email: email, cognitoID: userData.idToken.payload.identities[0].userId, lastLogin: awsDateTime}}))
    //.then(console.log("record created for :",email, "at: ", currentDateTime ));
    console.log("As submitted sender: ", this.state.initiator)
    console.log("As submitted email: ",this.state.recipient[0].userName)
    console.log("As Submitted message:", this.state.message)
    console.log("As submitted initiatorID: ",this.state.initiatorID)
  }

  render() {
    return (
      <>
      <MDBContainer className="w-100">
        <MDBRow>
          <MDBCol md="6">
            <form id="messagingService">

                  <MDBSelect
                    search
                    options={this.state.recipients}
                    selected="Choose email or type above"
                    label="Pick recipient"
                    getValue={this.emailValue}
                  />

                  <MDBInput 
                    type="textarea" 
                    label="Message Text" 
                    rows="5" 
                    getValue={this.messageValue}
                  />


                <div className="text-center mt-4">
                  <MDBBtn color="elegant" outline onClick={this.clickEvent}>
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>

            </form>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
      </>
    );
  }
}

export default Messaging;
