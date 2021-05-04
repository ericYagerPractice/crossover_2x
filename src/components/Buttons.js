import React, { Component } from "react";
import '../App.css'
import { Auth } from 'aws-amplify'
import { FaEnvelope } from 'react-icons/fa'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn,MDBIcon,MDBCol } from "mdbreact";
import { GoBook,GoShield } from "react-icons/go";

export default function LoginButtons() {
  return (
    <div>
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          <MDBIcon icon="user-astronaut" size="lg" />  Login / Signup
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem href="/login"><FaEnvelope /> Email/Password</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
}

function signOut() {
  Auth.signOut()
    .then(data => {
      console.log('signed out: ', data)
    })
    .catch(err => console.log(err));
}

export class AccountButton extends Component{ 
  state={
    admin:false
  };

  async componentDidMount(){
    const returnData = await Auth.currentAuthenticatedUser()
    try{
      this.setState({admin:returnData.signInUserSession.idToken.payload['cognito:groups'].includes('Admin')});
    } catch(err){
      console.log("error checking admin status in buttons.js: ",err);
    }
    
  }

  render(){
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="elegant" className="btn btn-rounded z-depth-0">
          <MDBIcon icon="user-circle" size="2x" />
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem header>  Account Options</MDBDropdownItem>
          <MDBDropdownItem href="/Account"><h6><GoShield color='red' /> Go to my account</h6></MDBDropdownItem>
          <MDBDropdownItem href="/Learning"><h6><GoBook color='red' /> Go to my learning</h6></MDBDropdownItem>
          {this.state.admin &&(<MDBDropdownItem href="/Admin"  ><h6><MDBIcon icon="tools" className='red-text' /> Go to my Admin Functions</h6></MDBDropdownItem>)}
          <MDBDropdownItem divider />
          <div className="text-center"><SignOutButton /></div>
        </MDBDropdownMenu>
      </MDBDropdown>  
    );
  }
}


export class MyToolsButton extends Component{ 
  state={
    admin:false
  };

  async componentDidMount(){
    const returnData = await Auth.currentAuthenticatedUser()
    try{
      this.setState({admin:returnData.signInUserSession.idToken.payload['cognito:groups'].includes('Admin')});
    } catch(err){
      console.log("error checking admin status in buttons.js: ",err);
    }
    
  }

  render(){
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="elegant" className="btn btn-rounded z-depth-0">
          <MDBIcon icon="tools" size="2x"/> 
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem header>
              <h6>My Toolbox</h6>
          </MDBDropdownItem>
          {this.state.admin &&(<MDBDropdownItem href="/UserStories"><h6><MDBIcon icon="question-circle" className="cyan-text"/> Go to User Stories</h6></MDBDropdownItem>)}
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
      <MDBBtn className="btn btn-sm" color="danger"
      onClick={signOut}
      >
      <MDBIcon icon="sign-out-alt" size="1x" /> Sign Out
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

export class MessageButton extends Component{
  
  render(){
    return(
      <>
        <div className="fixed-bottom">
          <MDBBtn
            floating
            href="/Mail"
            size="lg"
            color="warning"
            style={{ bottom: "110px", left: "50px" }}>
            <MDBIcon icon="comment" size="2x"/>
          </MDBBtn>
        </div>

      </>
    )
  }
}