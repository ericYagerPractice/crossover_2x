import { Auth, Hub } from 'aws-amplify'

export default async function checkUser(dispatch) {
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

export function useUserStatus() {
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


export function signOut() {
    Auth.signOut()
      .then(data => {
        console.log('signed out: ', data)
      })
      .catch(err => console.log(err));
  }