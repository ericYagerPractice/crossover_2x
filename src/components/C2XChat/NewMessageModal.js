/*
import { returnUser, fetchUserEmails } from '../../CheckAuth';
import React, { Component } from "react";
import { MDBContainer, MDBSelect, MDBInput, MDBBtn, MDBIcon,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from "mdbreact";
import { createMessage } from '../../graphql/mutations'
import { API, graphqlOperation, Auth, Hub } from 'aws-amplify'

const states = fetchUserEmails();

class NewMessageModal extends Component {
  state = { 
      authorizedRecipients: [],
      initiator:"",
      initiatorID:"",
      recipient: {},
      messageText: "",    
      modal: false
    };

    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

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
    this.setState({authorizedRecipients:stageOptions})
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
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <>
      <MDBContainer>
        <MDBBtn onClick={this.toggle}><MDBIcon far icon="paper-plane" className="ml-2 text-left" /> Create New Message</MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>New Message</MDBModalHeader>
              <form id="messagingService">
                <MDBModalBody>
                  <MDBSelect
                    className="text-left"
                    search
                    options={this.state.authorizedRecipients}
                    selected="Choose email or type above"
                    label="Pick recipient"
                    getValue={this.emailValue}
                  />

                  <MDBInput 
                    className="text-left"
                    type="textarea" 
                    label="Message Text" 
                    rows="5" 
                    getValue={this.messageValue}
                  />
                </MDBModalBody>
                <MDBModalFooter>
                  <div className="text-center mt-4">
                    <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                    <MDBBtn color="elegant" outline onClick={this.clickEvent}>
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </MDBModalFooter>
            </form>
          </MDBModal>
      </MDBContainer>
      </>
    );
  }
}

export default NewMessageModal;
*/