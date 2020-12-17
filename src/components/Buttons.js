import React, { Component } from "react";
import '../App.css'
import { Auth } from 'aws-amplify'
import { FaFacebook, FaGoogle, FaEnvelope } from 'react-icons/fa'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn,MDBIcon,MDBCol } from "mdbreact";
import { signOut } from '../CheckAuth';
import { GoBook,GoShield } from "react-icons/go";
export default function LoginButtons(props) {
  return (
    <div>
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          <MDBIcon icon="user-astronaut" size="lg" />  Login / Signup
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

export class SocialButtons extends Component{
  render(){
    return(
      <MDBCol className="text-left">
          <ul className="list-unstyled list-inline">  
              <li className="list-inline-item"> 
                  <a href="https://www.facebook.com/crossover2x" className="btn-floating btn-sm btn-fb mx-1" target="_blank"> 
                      <i className="fab fa-facebook-f"> </i>  
                  </a>  
              </li> 
              <li className="list-inline-item"> 
                  <a href="/" className="btn-floating btn-sm btn-tw mx-1"> 
                      <i className="fab fa-twitter"> </i> 
                  </a>  
              </li> 
              <li className="list-inline-item"> 
                  <a href="https://www.linkedin.com/company/crossover2x" className="btn-floating btn-sm btn-li mx-1" target="_blank"> 
                      <i className="fab fa-linkedin-in"> </i> 
                  </a>  
              </li> 
          </ul> 
      </MDBCol>
    )
  }
}