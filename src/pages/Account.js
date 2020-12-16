import React, {useState, useEffect } from 'react';
import { Auth, Storage } from "aws-amplify";
import ModalUpload from "../components/ModalUpload"
import { onError } from "../libs/errorLib";
import { 
    MDBCard, 
    MDBCardBody,
    MDBCardUp, 
    MDBAvatar, 
    MDBRow, 
    MDBCol, 
    MDBTable,
    MDBTableBody,
    MDBIcon,
} from 'mdbreact';
import './Account.css'

export default function Account() {
    const [userAvatar, getUserAvatar] = useState("");
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);  
    const [userEmail, getUserEmail] = useState("");
    const [emailVerified, checkUserEmail] = useState(false);
    const [userPhone, getUserPhone] = useState("");
    const [phoneVerified, checkUserPhone] = useState(false);
    const [userFirst, getUserFirst] = useState("");
    const [userLast, getUserLast] = useState("");

    useEffect(() => {
      onLoad();
    }, []);
  

    async function onLoad() {
      try {
        //Start session data pull
        const userInfoPromise = await Auth.currentSession();
        const userTokenEmail = userInfoPromise.idToken.payload.email;
        //End session data pull

        var pictureName = "avatar.jpg"; //generic picture name since they're all named this

        userHasAuthenticated(true); //Signal that the user has authenticated

        //Begin variable assignments for user info
        getUserFirst(userInfoPromise.idToken.payload['custom:firstName']);
        getUserLast(userInfoPromise.idToken.payload['custom:lastName']);
        getUserEmail(userTokenEmail);
        checkUserEmail((userInfoPromise.idToken.payload.email_verified)) //Check if email is verified
        getUserPhone(userInfoPromise.idToken.payload.phone_number);
        checkUserPhone((userInfoPromise.idToken.payload.phone_number_verified)) //Check if phone is verified
        //End variable assignements for user info

        var pictureKey =  userTokenEmail+"/"+pictureName;
        const signedURL = await Storage.get(pictureKey)
        getUserAvatar(signedURL); //Get the signed URL to load picture
      }
      catch(e) {
        if (e !== 'No current user') {
          onError(e);
          setIsAuthenticating(false);
        }
      }
      setIsAuthenticating(false);
    }


  
  return (
    !isAuthenticating && 
    <>
    {isAuthenticated ?
      <MDBRow>
      <MDBCol md='4'></MDBCol>
      <MDBCol md='4'>
          <MDBCard testimonial>
          <MDBCardUp className='indigo lighten-1' />
          <MDBAvatar className='mx-auto white'>
              <img
              src={userAvatar}
              alt=''
              className="img-fluid z-depth-1 rounded-circle"
              id="Avatar"
              />
              
          </MDBAvatar>
          <MDBCardBody>
              <h4 className='card-title'>Your Account</h4>
              <MDBTable id="userAccount>">
                  <MDBTableBody>
                      <tr>
                          <td>First Name</td>
                          <td>{userFirst}</td>
                      </tr>
                      <tr>
                          <td>Last Name</td>
                          <td>{userLast}</td>
                      </tr>
                      <tr>
                          <td>Email {emailVerified? <MDBIcon icon="check-circle" className="green-text" />:<MDBIcon icon="times-circle" className="amber-text" />}</td>
                          <td>{userEmail}</td>
                      </tr>
                      <tr>
                          <td>Phone Number {phoneVerified? <MDBIcon icon="check-circle" className="green-text" />:<MDBIcon icon="times-circle" className="amber-text" />}</td>
                          <td>{userPhone}</td>
                      </tr>
                  </MDBTableBody>
              </MDBTable>


              <ModalUpload />
          </MDBCardBody>
          </MDBCard>
      </MDBCol>
      <MDBCol md='4'></MDBCol>
      
  </MDBRow>
    : 
    <MDBRow>
        <MDBCol md='4'></MDBCol>
        <MDBCol md='4'>
            <MDBCard testimonial style={{width: "30rem", marginTop: "1rem"}}>
                <MDBCardUp className='indigo lighten-1' />
                
                <MDBCardBody>
                    <h4 className='card-title'>Log in to see account</h4>
                    <hr />
                    <p>
                        <a href='/Login' class="btn btn-primary">
                            <strong>Login/Signup</strong>
                        </a>
                    </p>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol md='4'></MDBCol>
        
    </MDBRow>
    }
    </>
  );
}