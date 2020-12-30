
import {fetchUserEmails } from '../CheckAuth';
import React, { Component } from "react";
import { MDBContainer, MDBAutocomplete, MDBInput, MDBCol, MDBRow, MDBBtn, MDBIcon} from "mdbreact";
import "./Messaging.css";

const states = fetchUserEmails();

class Messaging extends Component {

  constructor() {
    super();
    this.state = { 
      email: [],
      recipient: "",
      message: "",    
    };
  }

  componentDidMount() {
    fetchUserEmails()
      .then(emailData => this.setState({email:emailData}));
  }

  emailValue = value => {
    console.log(value);
    this.setState({recipient:value})
  };

  clickEvent = () => {
    console.log(this.state.recipient);
  }

  render() {
    return (
      <>
      <MDBContainer className="w-100">
        <MDBRow>
          <MDBCol md="6">
            <form id="messagingService" onSubmit={handleFormSubmit}>

                  <MDBAutocomplete
                    data={this.state.email}
                    label="Recipient Email"
                    icon="envelope-open"
                    clear
                    id="input"
                    getValue={this.logValue}
                  />

                  <MDBInput 
                    type="textarea" 
                    label="Message Text" 
                    rows="5" 
                    icon="edit"
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

async function handleFormSubmit(event) {
  event.preventDefault();
  try {
      console.log(event);
    
  } catch (e) {
    console.log(e);
  }
}

export default Messaging;
