import { Storage } from "aws-amplify";
import React, { useState, useEffect } from 'react';
import { onError } from "../libs/errorLib";
import LoaderButton from "./LoaderButton";
import {
    MDBModal, 
    MDBModalBody, 
    MDBModalHeader, 
    MDBModalFooter,
    MDBBtn,
    MDBIcon,
    MDBTypography,
    MDBCol,
} from 'mdbreact';
import { Auth } from "aws-amplify";


function ModalUpload() {
    const [picture, setPicture] = useState("");
    const [isPicture, setIsPicture] = useState(false);
    const [showUploadModal, modalSwitch] = useState(false);
    const [userEmail, getUserEmail] = useState("");
    const [isAuthenticated, userHasAuthenticated] = useState(false); 
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    async function onLoad() {
        try {
          const userInfoPromise = await Auth.currentSession();
          console.log(userInfoPromise);
          userHasAuthenticated(true)
          getUserEmail(userInfoPromise.idToken.payload.email);
        }
        catch(e) {
          if (e !== 'No current user') {
            onError(e);
          }
        }
        setIsAuthenticating(false);
      }

    function onChange(e) {
        const file = e.target.files[0];
        setPicture(file);
        setIsPicture(true);
    }

    function showTheModal(){
        modalSwitch(!showUploadModal);
    }

    async function handleFormSubmit(event) {
        event.preventDefault();
        try {
            var pictureName = userEmail+"/avatar.jpg";
            await Storage.put(
                pictureName, 
                picture, 
                {contentType: picture.type}
            )
            .then (result => console.log(result))
            .catch(err => console.log(err));
          
        } catch (e) {
          onError(e);
        }
      }

    useEffect(() => {
    onLoad();
    }, []);

    return (
        !isAuthenticating && isAuthenticated &&
        <>
          <MDBModal isOpen={showUploadModal} toggle={showTheModal}   size="lg" >
              <MDBModalHeader toggle={showTheModal}>Upload new file</MDBModalHeader>
              <MDBModalBody>
                <MDBTypography tag='h4' variant="h4-responsive">Update your Avatar</MDBTypography>
                  <form id="uploadPhoto" onSubmit={handleFormSubmit}>
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                            type="file" 
                            accept='image/jpeg'
                            onChange={onChange}
                        />
                      </div>
                    </div>
                    <LoaderButton rounded block disabled={!isPicture} type="submit" color="primary" >
                      Upload Photo
                    </LoaderButton>
                  </form>
              </MDBModalBody>
              <MDBModalFooter>
              <MDBBtn color="secondary" onClick={showTheModal}>Close</MDBBtn>
              </MDBModalFooter>
          </MDBModal>
          <MDBCol md='12' className='d-flex justify-content-center'>
            <MDBBtn tag="a" size="sm" floating gradient="blue" onClick={showTheModal}><MDBIcon icon="user-edit" /></MDBBtn>
          </MDBCol>
        </>
    )
  }

  export default ModalUpload;