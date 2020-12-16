import React, { Component } from "react";
import '../App.css'
import { Auth } from 'aws-amplify'
import { FaFacebook, FaGoogle, FaEnvelope } from 'react-icons/fa'
import { HiOutlineUser } from "react-icons/hi";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtnFixed, MDBBtnFixedItem } from "mdbreact";

export default function Buttons(props) {
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

  state = {
    buttonStyle: {
      transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
      opacity: "0"
    }
  }


  onHover = () => {
    this.setState({
      buttonStyle: {
        transform: "scaleY(1) scaleX(1) translateY(0) translateX(0)",
        opacity: "1"
      }
    });
  }

  onMouseLeave = () => {
    this.setState({
      buttonStyle: {
        transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
        opacity: "0"
      }
    });
  }

  render() {
    return (
        <MDBBtnFixed
          onMouseEnter={this.onHover}
          onMouseLeave={this.onMouseLeave}
          floating
          size="md"
          color="red"
          icon="user-cog"
          style={style}
        >
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="red"
            icon="sign-out-alt"
          />
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="blue"
            icon="user"
          />
          
        </MDBBtnFixed>
    );
  }
}

const style = {
  margin: 0,
  top: 'auto',
  right: 900,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

