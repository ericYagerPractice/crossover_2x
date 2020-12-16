import { Storage } from "aws-amplify";
import React, { useState, useEffect } from 'react';
import { onError } from "../libs/errorLib";
import { Auth } from "aws-amplify";


function AttributeDownload() {
    const [userAvatar, getUserAvatar] = useState("");
    const [userEmail, getUserEmail] = useState("");
    const [isAuthenticated, userHasAuthenticated] = useState(false); 
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    async function onLoad() {
        try {  
          const userInfoPromise = await Auth.currentSession();
          const userTokenEmail = userInfoPromise.idToken.payload.email
          var pictureName = "avatar.jpg";
          var pictureKey =  userTokenEmail+"/"+pictureName;
          const signedURL = await Storage.get(pictureKey)
          getUserEmail(userTokenEmail);
          getUserAvatar(signedURL);
          userHasAuthenticated(true)
        }
        catch(e) {
          if (e !== 'No current user') {
            onError(e);
          }
        }
        setIsAuthenticating(false);
      }

    useEffect(() => {
    onLoad();
    }, []);

    return (
        !isAuthenticating && isAuthenticated &&
        <>
            <img src={userAvatar} alt="avatar"></img>
            <h3>{userEmail}</h3>
        </>
    )
  }

  export default AttributeDownload;