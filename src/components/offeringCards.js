import React, { useEffect, useState} from 'react'
import {
  MDBCol,
  MDBContainer,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
} from 'mdbreact';
import { Auth, API, graphqlOperation, Storage } from 'aws-amplify'
import { createOffering, deleteOffering } from '../graphql/mutations'
import { listOfferings } from '../graphql/queries'
import awsmobile from '../aws-exports'
import { v4 as uuid } from 'uuid';
import {AmplifyS3Image} from "@aws-amplify/ui-react";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = awsmobile

const initialofferingState = [{ title: '', subTitle: '', image: '', url: '', bulletPoint1: '', bulletPoint2: '', bulletPoint3:'' }]
const fileData = {file: null, fileExtension:'', fileType: '', fileKey:''}

function OfferingCards() {
  const [offerings, setOfferings] = useState(initialofferingState) //hook to hold offerings 
  const [currentUser, setCurrentUser] = useState('')


    //Fetch all data, save in hooks on load
    useEffect(() => {
        fetchData()
    }, [])

    
    //Fetch data from each list function and save it to respective hooks
    // eslint-disable-next-line
    async function fetchData() {
      try{
        //API calls
        const userID = await Auth.currentUserCredentials();
        const offeringData = await API.graphql(graphqlOperation(listOfferings))
        const offeringArray = offeringData.data.listOfferings.items
        //Setters for hooks
        setOfferings(offeringArray)
        setCurrentUser(userID.identityId)
      }catch(err){
          console.log("Error w/ offering retrieval: ", err)
      }
    }

    //UI render
    return (<></>)/*
      
        <MDBContainer>
          {console.log(offerings)}
          {
            offerings.map((offering, index) => (
              <MDBCol md='6' xl='4' className='px-2'>
                <MDBAnimation reveal type='fadeInLeft'>
                  <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-0 d-flex flex-row align-items-center'>
                      <img src={offering.image}
                        width="85"
                      />
                    <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                      <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                        {offering.title}
                      </MDBCardText>
                      <MDBCardTitle className="my-1 card-title--sm">
                        <i>{offering.subTitle}</i>
                      </MDBCardTitle>
                      <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                      <ul className='text-dark mt-2 card-list'>
                        {offering.bulletPoints.map((bullet)=> (
                          <li>{bullet}</li>
                        ))}
                      </ul>
                      <MDBNavLink
                        tag='button'
                        to={offering.url}
                        className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                      >
                        {offering.buttonText} <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                      </MDBNavLink>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
            ))
          }
        </MDBContainer>
    ) */
}

export default OfferingCards