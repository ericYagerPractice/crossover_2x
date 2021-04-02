import React, { useEffect, useState} from 'react'
import { MDBProgress, MDBContainer, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBCol, MDBRow, MDBIcon, MDBInputGroup} from 'mdbreact';
import { Auth, API, graphqlOperation, Storage } from 'aws-amplify'
import { createOffering, deleteOffering, createUrlPatterns, deleteUrlPatterns } from '../graphql/mutations'
import { listOfferings, listUrlPatternss } from '../graphql/queries'
import awsmobile from '../aws-exports'
import { v4 as uuid } from 'uuid';
import {AmplifyS3Image} from "@aws-amplify/ui-react";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = awsmobile

const initialofferingState = { title: '', subTitle: '', image: '', url: '', bulletPoint1: '', bulletPoint2: '', bulletPoint3:'', buttonText:'' }
const fileData = {file: '', fileExtension:'', fileType: '', fileKey:''}

function OfferingInput() {
  const [offeringFormState, setOfferingFormState] = useState(initialofferingState) //hook for offering form data input
  const [offerings, setOfferings] = useState([]) //hook to hold offerings 
  const [file, updateFile] = useState(fileData)
  const [uploadLevel, updateLevel] = useState(0)
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
        const urlData = await API.graphql(graphqlOperation(listUrlPatternss))
        const offerings = offeringData.data.listOfferings.items
        //Setters for hooks
        setOfferings(offerings)
        setCurrentUser(userID.identityId)
      }catch(err){
          console.log("Error w/ offering retrieval: ", err)
          setOfferings(initialofferingState)
      }
    }

    //Setters

    //set offering form with key and values from rendered form on change
    function setOfferingInput(key, value) {
      setOfferingFormState({ ...offeringFormState, [key]: value })
    }

    async function addoffering() {
      try {
        const formattedOfferingData = {
          title: offeringFormState.title, 
          subTitle: offeringFormState.subTitle, 
          image: offeringFormState.image, 
          bulletPoints: [offeringFormState.bulletPoint1, offeringFormState.bulletPoint2 , offeringFormState.bulletPoint3],
          buttonText: offeringFormState.buttonText
        }
        await API.graphql(graphqlOperation(createOffering, { input: formattedOfferingData }))
        .then(await API.graphql(graphqlOperation(createUrlPatterns, {input: {urlPattern: offeringFormState.url}})))
        .then(fetchData())
      } catch (err) {
        console.log('error creating offering: ', err)
      } 
    } 

    const updateFileInput = fileInput => {
      const extension = fileInput[0].name.split(".").pop()
      const key = `offeringimages2/${uuid()}.${extension}`
      updateFile({file: fileInput, fileExtension:extension, fileType: fileInput[0].type, fileKey: key})
    }

    async function deleteSpecifiedOffering(deleteID){
        try{
            await API.graphql(graphqlOperation(deleteOffering, {input: {id:deleteID}}))
            await fetchData()
        } catch(error){
            console.log("error deleting offering: ",error)
        }
    }
    
    //UI render
    return (
        <MDBContainer>
          <MDBProgress value={uploadLevel} className="my-2" />
          <>
          <MDBContainer className="w-100">
            <MDBRow>
              <MDBCol md="6">
                <form id="Offering Input Form">
                  <MDBInput
                    background
                    size="lg"
                    label="Enter Offering Title"
                    type="textarea"
                    rows="1"
                    onChange={event => setOfferingInput('title', event.target.value)}
                  />

                  <MDBInput 
                    background
                    type="textarea" 
                    label="Enter Sub-Title" 
                    size="sm"
                    rows="1" 
                    onChange={event => setOfferingInput('subTitle', event.target.value)}
                  />

                  <MDBInputGroup
                    type="textarea" 
                    rows="1" 
                    prepend="https://crossover2x.net/offerings/"
                    onChange={event => setOfferingInput('url', event.target.value)}
                  />

                  <MDBInput
                      icon="images"
                      size="lg"
                      type="textarea" 
                      label="Enter Dropbox File URL for image" 
                      rows="1" 
                      onChange={event => setOfferingInput('image', event.target.value)}
                  />

                  <ul>
                    <li>
                      <MDBInput 
                        type="textarea" 
                        label="Enter bullet point" 
                        rows="1" 
                        onChange={event => setOfferingInput('bulletPoint1', event.target.value)}
                      />
                    </li>
                    <li>
                      <MDBInput 
                        type="textarea" 
                        label="Enter bullet point" 
                        rows="1" 
                        onChange={event => setOfferingInput('bulletPoint2', event.target.value)}
                      />
                    </li>
                    <li>
                      <MDBInput 
                        type="textarea" 
                        label="Enter bullet point" 
                        rows="1" 
                        onChange={event => setOfferingInput('bulletPoint3', event.target.value)}
                      />
                    </li>
                  </ul>

                  <MDBInput 
                    type="textarea" 
                    label="Button Text" 
                    rows="1" 
                    onChange={event => setOfferingInput('buttonText', event.target.value)}
                  />

                  <div className="text-center mt-4">
                    <MDBBtn color="elegant" outline type="submit" onClick={event => addoffering()}>
                      Submit Offering
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>

            </MDBRow>
          </MDBContainer>
        </>
        <MDBRow className="mt-5">
            <MDBTable striped bordered hover size="sm">
                <MDBTableHead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Sub Title</th>
                        <th>Bullet Points</th>
                        <th>Image</th>
                        <th>URL</th>
                        <th>Sample Button</th>
                        <th>Delete</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                {
                    offerings.map((offering, index) => (
                      <tr>
                      <td key={index}>{index}</td>
                      <td key={uuid()}>{offering.title}</td>
                      <td key={uuid()}>{offering.subTitle}</td>
                      <td key={uuid()}><ul>{offering.bulletPoints.map((bulletPoint,index)=>(
                        
                          <li>{bulletPoint}</li>
                        
                      ))}</ul>
                      </td>
                      <td key={uuid()}>
                      <div class="h-25 d-inline-block">
                          <img src={offering.image}
                            width="60"
                          />
                        </div>
                        
                      </td>
                      <td key={uuid()}>{offering.url}</td>
                      <td key={uuid()}><MDBBtn disabled>{offering.buttonText}</MDBBtn></td>
                      <td key={uuid()}><MDBBtn onClick={event=>deleteSpecifiedOffering(offering.id)}>Delete</MDBBtn></td>
                  </tr>
                    ))
                    }
                </MDBTableBody>
              </MDBTable>
          </MDBRow>
      </MDBContainer>
    )
}

export default OfferingInput
