import { API, graphqlOperation, Auth, Hub } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { createUser, updateUser } from './graphql/mutations'
import { listUsers } from './graphql/queries'

/* CheckAuth.js will house all functions intended to check a user's status.  This includes "Check User" which will set Auth Dispatch to the user's information
or push a console error.  "useUserStatus" will return the user. */

async function checkUser(dispatch) {
  try {
    const user = await Auth.currentAuthenticatedUser()
    dispatch({ type: 'setUser', user })
  } catch (err) {
    if(err != "The user is not authenticated"){
      console.log('err: ', err)
    }
    dispatch({ type: 'loaded' })
  }
}

async function checkAdmin(){
  try{
    await Auth.currentAuthenticatedUser()
    .then(userData=>{
      return(userData.signInUserSession.idToken.payload['cognito:groups'].includes('Admin'));
    })
    .catch(err=>{
      console.log("error checking for admin: ",err);
      return(false);
    })
  } catch(err){
    console.log("error checking authentication: ",err);
    return(false);
  }
}

function useUserStatus() {
  let [user, setUser] = useState(null)
  
  useEffect(() => {
    let updateUser = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setUser(user)
      } catch {
        setUser(null)
      }
    }
    Hub.listen('auth', updateUser) // listen for login/signup events

   // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag 
    updateUser() // check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser) // cleanup
  }, []);

  return user;
}


function signOut() {
    Auth.signOut()
      .then(data => {
        console.log('signed out: ', data)
      })
      .catch(err => console.log(err));
  }

async function createOrUpdateUser(email, cognitoId) {
  const currentDateTime = new Date();
  const awsDateTime = currentDateTime.toISOString();
  const userData = await Auth.currentSession()
  const users = await fetchUsers();
  const userIDsandEmail = users.data.listUsers.items.map(user=>[user.id,user.email]);
  var userExists = false;
  var userID = "";
  userIDsandEmail.forEach(dataPoint=>{
    if(dataPoint.includes(email)){
      userExists=true;
      userID=dataPoint[0];
    } 
  })

  if(!userExists){
    await API.graphql(graphqlOperation(createUser, {input: {email: email, cognitoID: userData.idToken.payload.identities[0].userId, lastLogin: awsDateTime}}))
    .then(console.log("record created for :",email, "at: ", currentDateTime ));
  } else{
    await API.graphql(graphqlOperation(updateUser, {input: {id: userID, lastLogin: awsDateTime}}))
    console.log("user already exists: ", email, "_", userID, " updated.");
  }
}

async function fetchUsers(){
  try{
      const listUserData = await API.graphql(graphqlOperation(listUsers))
      return(listUserData);
  } catch (error){
      console.log("error getting users: ", error);
      return(null);
  }
} 

async function fetchUserEmails(){
  try{
      const listUserData = await API.graphql(graphqlOperation(listUsers))
      const userIDsandEmail = listUserData.data.listUsers.items.map(user=>user.email);
      return(userIDsandEmail);
  } catch (error){
      console.log("error getting users: ", error);
      return(null);
  }
} 

export default checkUser;

export{
  checkAdmin,
  useUserStatus,
  signOut,
  createOrUpdateUser,
  fetchUsers,
  fetchUserEmails
}