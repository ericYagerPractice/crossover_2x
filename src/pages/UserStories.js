import React, { useEffect, useState} from 'react'
import { MDBContainer, MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBTypography, MDBCol, MDBRow, MDBTable, MDBTableHead, MDBTableBody, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';
import { API, graphqlOperation } from 'aws-amplify'
import { createUserStory, deleteUserStory } from '../graphql/mutations'
import { listUserStoriesWithTasks } from '../customGraphQL/queries'
import { Auth, Hub } from 'aws-amplify';

const userStoryInitialState = [{ user: '', goal: '', task: [''] }]
const userStoryInputInitialState = {user: '', activity: '', action: ''}
const userStoryTechTaskInputInitialState = {createdBy: '', type: '', description: '', userStoryId: ''}

const UserStories = () => {
  const [userStoryFormState, setUserStoryFormState] = useState(userStoryInputInitialState)
  const [userStories, setUserStories] = useState(userStoryInitialState)
  const [techTasks, setTechTasks] = useState(userStoryTechTaskInputInitialState)
  const [userName, setUserName] = useState(null)
  const [isEditing, setEditing] = useState({uuid:"", userStory:""})
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [isNewModalOpen, setNewModalOpen] = useState(false)

  

  
    //Fetch all data, save in hooks on load
    useEffect(() => {
        fetchData()
        .then(console.log(userStories))
    }, [])

    function openModal(storyUUID){
      setEditModalOpen(true)
      console.log(storyUUID)
    }

    //Get listFaQs, set items to setFAQs
    async function setInitialData(){
        try{
            let userStoryData = await API.graphql(graphqlOperation(listUserStoriesWithTasks))
            let hubUserName = " "
            try{
              await Auth.currentSession()
              .then(data=>{
                hubUserName = data.idToken.payload.email
              })
            }  catch(error){
              console.log(error)
            }
            
            setUserStories(userStoryData.data.listUserStorys.items)
            setUserName(hubUserName)
            return(true)
        }catch(err){
            console.log("Error w/ faq retrieval: ", err)
            setFAQs(userStories)
            return(false)
        }
    }
    
    //Fetch data from each list function and save it to respective hooks
    // eslint-disable-next-line
    async function fetchData() {
        try {
          await setInitialData()
        } catch (err) { console.log('error fetching userStories: ', err) }
    }

    //Setters

    //set faq form with key and values from rendered form on change
    function setUserStoryInput(key, value) {
      console.log(userStoryFormState)
      setUserStoryFormState({...userStoryFormState,[key]: value })
    }
    //Add functions

    //Add faq by pulling form state and setting it using hook function.  
    //Reset the form state.  
    //Call createFaq using the form state data and then re-fetch data
    async function addUserStory() {
        try {
          if (!userStoryFormState.user || !userStoryFormState.activity || !userStoryFormState.action){
            return
          }
          let userStoryInputString = "I am a "+userStoryFormState.user+" and I need to "+userStoryFormState.activity+" so I can "+userStoryFormState.action
          await API.graphql(graphqlOperation(createUserStory, {input: {user: userName, goal: userStoryInputString}}))
          .then(fetchData())
          .then(setNewModalOpen(false))
        } catch (err) {
          console.log('error creating user story:', err)
        }
    }


    async function deleteSpecifiedUserStory(deleteID){
        try{
            await API.graphql(graphqlOperation(deleteUserStory, {input: {id:deleteID}}))
            .then(await fetchData())
        } catch(error){
            console.log("error deleting user story: ",error)
        }
    }

    
    
    //UI render
    return (
          <>
          <MDBBtn onClick={()=>setNewModalOpen(true)}>New</MDBBtn>
            <MDBModal isOpen={isEditModalOpen} toggle={()=>setEditModalOpen(false)} size="fluid"  >
              <MDBModalHeader toggle={()=>setEditModalOpen(false)}>MDBModal title</MDBModalHeader>
              <MDBModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={()=>setEditModalOpen(false)}>Close</MDBBtn>
                <MDBBtn color="primary">Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
            <MDBModal isOpen={isNewModalOpen} toggle={()=>setNewModalOpen(false)} size="fluid"  >
              <MDBModalHeader toggle={()=>setNewModalOpen(false)}>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                  <MDBInputGroup
                    material
                    containerClassName="m-0"
                    className="align-text-bottom form-inline"
                    inputs={
                      <>
                        <MDBTable>
                          <MDBTableBody>
                          <tr>
                            <td className="align-middle"><MDBTypography tag="h3" variant="h3-responsive">I am a </MDBTypography></td>
                            <td className="align-middle"><MDBInput background onChange={event => setUserStoryInput('user', event.target.value)} /></td>
                            <td className="align-middle"><MDBTypography tag="h3" variant="h3-responsive">, and I want to</MDBTypography></td>
                            <td className="align-middle"><MDBInput background onChange = {event => setUserStoryInput('activity', event.target.value)}/></td>
                            <td className="align-middle"><MDBTypography tag="h3" variant="h3-responsive">, so that </MDBTypography></td>
                            <td className="align-middle"><MDBInput background onChange = {event => setUserStoryInput('action', event.target.value)}/></td>
                            <td className="align-middle"><MDBBtn color="danger" onClick={()=>addUserStory()}>Send it</MDBBtn></td>
                          </tr>
                          </MDBTableBody>
                        </MDBTable>
                      </>
                    }
                  />
                </MDBModalBody>
              </MDBModal>
            <hr />
            <MDBContainer>
              <MDBRow className="ml-5">
                <MDBTable>
                  <MDBTableHead className="text-center">
                    <tr>
                      <th></th>
                      <th>Submitted By</th>
                      <th>User Story</th>
                      <th>Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {
                      userStories.map((userStory, index)=>(

                          <tr>
                            <td className="align-middle"><h5>{index+1}.</h5></td>
                            <td className="align-middle"><h5>{userStory.user}</h5></td>
                            <td className="align-middle"><h5>{userStory.goal}</h5></td>
                            <td className="align-middle">
                              <MDBCol>
                                <MDBBtn className="btn-floating btn-sm btn-fb" onClick={()=>deleteSpecifiedUserStory(userStory.id)}><MDBIcon icon="trash-alt" /></MDBBtn>
                                <MDBBtn className="btn-floating btn-sm warning-color" onClick={()=>deleteSpecifiedUserStory(userStory.id)}><MDBIcon icon="pencil-alt" /></MDBBtn>
                                <MDBBtn className="btn-floating btn-sm success-color" onClick={()=>openModal(userStory.id)}><MDBIcon icon="plus-circle" /></MDBBtn>
                              </MDBCol>
                            </td>
                          </tr>  
                      
                      ))
                    }
                  </MDBTableBody>
                </MDBTable>
              </MDBRow>
            </MDBContainer>
          </>

    )
}

export default UserStories

/*
type UserStory
@model
{
  id: ID!
  user: String!
  goal: String!
  task: [TechTask] @connection(keyName: "techTasksPerUserStory", fields: ["id"]) 
}
eaeraefffeeaaeraeafeafeae
type TechTask
@key(name: "techTasksPerUserStory", fields: ["userStoryId"])
@model
{
  id: ID!
  createdBy: String!
  type: String!
  description: String!
  userStoryId: ID!
} */