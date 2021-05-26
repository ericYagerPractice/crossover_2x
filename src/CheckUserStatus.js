import { Auth } from 'aws-amplify'

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

export default checkUser;