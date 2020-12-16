import { Auth } from 'aws-amplify'

export default async function checkUser(dispatch) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
      dispatch({ type: 'setUser', user })
    } catch (err) {
      console.log('err: ', err)
      dispatch({ type: 'loaded' })
    }
  }

export function signOut() {
    Auth.signOut()
      .then(data => {
        console.log('signed out: ', data)
      })
      .catch(err => console.log(err));
  }