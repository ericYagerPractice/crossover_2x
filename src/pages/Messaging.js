
import { returnUser, fetchUserEmails } from '../CheckAuth';
import React, { Component } from "react";
import { MDBContainer, MDBAutocomplete, MDBInput, MDBCol, MDBRow, MDBBtn, MDBIcon} from "mdbreact";
import { createMessage} from '../graphql/mutations'
import { API, graphqlOperation, Auth, Hub } from 'aws-amplify'
import "./Messaging.css";

const states = fetchUserEmails();

class Messaging extends Component {

  constructor() {
    super();
    this.state = { 
      email: [],
      sender:"",
      recipient: "",
      message: "",    
    };
  }

  componentDidMount() {
    fetchUserEmails()
      .then(emailData => this.setState({email:emailData}));
    returnUser()
      .then(userData => this.setState({sender:userData.attributes.email}))
  }

  emailValue = value => {
    this.setState({recipient:value})
  };

  messageValue = value => {
    this.setState({message:value})
  };

  clickEvent = () => {
    //await API.graphql(graphqlOperation(createMessage, {input: {email: email, cognitoID: userData.idToken.payload.identities[0].userId, lastLogin: awsDateTime}}))
    //.then(console.log("record created for :",email, "at: ", currentDateTime ));
    console.log("As submitted sender: ", this.state.sender);
    console.log("As submitted email: ",this.state.recipient);
    console.log("As Submitted message:", this.state.message)
  }

  render() {
    return (
      <>
      <MDBContainer className="w-100">
        <MDBRow>
          <MDBCol md="6">
            <form id="messagingService">

                  <MDBAutocomplete
                    data={this.state.email}
                    label="Recipient Email"
                    icon="envelope-open"
                    clear
                    id="input"
                    getValue={this.emailValue}
                  />

                  <MDBInput 
                    type="textarea" 
                    label="Message Text" 
                    rows="5" 
                    icon="edit"
                    getValue={this.messageValue}
                  />


                <div className="text-center mt-4">
                  <MDBBtn color="elegant" outline type="submit" onClick={this.clickEvent}>
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
