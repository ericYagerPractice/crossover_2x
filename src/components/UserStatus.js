import React from 'react';
import Auth from '@aws-amplify/Auth';
import { Hub } from '@aws-amplify/core';


export class AdminStatus extends Component{ 
  async componentDidMount(){
    const returnData = await Auth.currentAuthenticatedUser()
    try{
      return(returnData.signInUserSession.idToken.payload['cognito:groups'].includes('Admin'));
    } catch{
      return(false);
    }
    
  }
}