import React, { useEffect, useState} from 'react'
import { MDBProgress, MDBContainer, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBCol, MDBRow, MDBIcon, MDBFileInput} from 'mdbreact';
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

    async function uploadFile() {
      console.log(file)
      //const storageUploadKey = 
      await Storage.put(file.fileKey, file.file[0])
      .then(async function(result) {console.log(`result : ${JSON.stringify(result)}`);})
      .catch(err=>console.log(err))//storageUploadKey=err)
      //return(storageUploadKey)
    }

    async function addoffering() {
      try {
        var storageUploadKey = await uploadFile()
        console.log(storageUploadKey)
        if(storageUploadKey){
          updateLevel(0)
        }
        const formattedOfferingData = {
          title: offeringFormState.title, 
          subTitle: offeringFormState.subTitle, 
          image: storageUploadKey.key, 
          url: offeringFormState.url, 
          bulletPoints: [offeringFormState.bulletPoint1, offeringFormState.bulletPoint2 , offeringFormState.bulletPoint3],
          buttonText: offeringFormState.buttonText
        }
        await API.graphql(graphqlOperation(createOffering, { input: formattedOfferingData }))
        .then(fetchData())
      } catch (err) {
        console.log('error uploading image: ', err)
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
                    label="Enter Offering Title"
                    type="textarea"
                    rows="1"
                    onChange={event => setOfferingInput('title', event.target.value)}
                  />

                  <MDBInput 
                    type="textarea" 
                    label="Enter Sub-Title" 
                    rows="1" 
                    onChange={event => setOfferingInput('subTitle', event.target.value)}
                  />

                  <MDBInput 
                    type="textarea" 
                    label="Enter URL pattern (ex: xyz, not https://crossover2x.net/xyz)" 
                    rows="1" 
                    onChange={event => setOfferingInput('url', event.target.value)}
                  />

                  <MDBFileInput 
                    getValue ={event => updateFileInput(event)}
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
                    <MDBBtn color="elegant" outline onClick={event => addoffering()}>
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
                          <AmplifyS3Image 
                            imgKey={offering.image}
                            identityId={currentUser.identityId} 
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
