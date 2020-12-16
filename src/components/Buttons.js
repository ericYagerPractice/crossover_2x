import React, { Component } from "react";
import '../App.css'
import { Auth } from 'aws-amplify'
import { FaFacebook, FaGoogle, FaEnvelope } from 'react-icons/fa'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn,MDBIcon,MDBTooltip } from "mdbreact";
import { signOut } from '../CheckAuth';
import { GoBook,GoShield } from "react-icons/go";
export default function LoginButtons(props) {
  return (
    <div>
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          Login / Signup
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem header>Social Authentication</MDBDropdownItem>
          <MDBDropdownItem onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}><FaFacebook color='blue' /> Facebook </MDBDropdownItem>
          <MDBDropdownItem onClick={() => Auth.federatedSignIn({provider: 'Google'})}><FaGoogle color='red' /> Google</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem onClick={() => Auth.federatedSignIn()}><FaEnvelope /> Email/Password</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}

export class AccountButton extends Component {

  render() {
    return (
          <MDBDropdown>
            <MDBDropdownToggle caret color="danger">
              <MDBIcon icon="user-astronaut" size="lg" /> Account
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem header>Account Tools</MDBDropdownItem>
              <MDBDropdownItem ><GoShield color='red' /> Go to my account</MDBDropdownItem>
              <MDBDropdownItem ><GoBook color='red' /> Go to my learning</MDBDropdownItem>
              <MDBDropdownItem divider />
              <div className="text-center"><SignOutButton /></div>
            </MDBDropdownMenu>
          </MDBDropdown>    
    );
  }
}

export class SignOutButton extends Component{
  
  render() {
    return (
      <MDBBtn className="btn btn-rounded" color="danger"
      onClick={signOut}
      >
      <MDBIcon icon="sign-out-alt" size="lg" />
    </MDBBtn>
    );
  }
}