import { Auth } from 'aws-amplify'
import { useEffect } from 'react';


function signIn(){
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

function signOut() {
    Auth.signOut()
      .then(data => {
        console.log('signed out: ', data)
      })
      .catch(err => console.log('sign out failure: ',err));
  }


export{
    signIn,
    signOut

}