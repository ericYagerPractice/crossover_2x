import { Auth } from 'aws-amplify'


export default function signIn(authProvider){
    if(authProvider){
        Auth.federatedSignIn({provider: authProvider})
        .then(data=> {
            console.log('signed in: ',data)
        })
        .catch(err => console.log('sign in failure: ',err));
    } else{
        Auth.federatedSignIn()
        .then(data=> {
            console.log('signed in: ',data)
        })
        .catch(err=>console.log('sign in failure: ',err));
    }
}

export function signOut() {
    Auth.signOut()
      .then(data => {
        console.log('signed out: ', data)
      })
      .catch(err => console.log('sign out failure: ',err));
  }