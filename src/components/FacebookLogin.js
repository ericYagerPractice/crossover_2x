import React, { Component} from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
 
export default class FacebookLogin extends Component {
  handleResponse = (data) => {
    console.log(data);
    console.log(data.profile.first_name);
    console.log(data.profile.last_name);
    console.log(data.profile.picture.data.url);
    console.log(data.tokenDetail.graphDomain);
  }
 
  handleError = (error) => {
    this.setState({ error });
  }
 
  render() {
    return (
      <FacebookProvider appId="190406161110309">
        <LoginButton
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
    );
  }
}