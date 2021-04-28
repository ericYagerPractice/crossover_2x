import React, { useEffect, useState} from 'react'
import { MDBContainer, MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBTypography, MDBCol, MDBRow, MDBTable, MDBTableHead, MDBTableBody, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';
import { API, graphqlOperation } from 'aws-amplify'
import { createUserStory, deleteUserStory, createTechTask } from '../graphql/mutations'
import { listTechTasks } from '../graphql/queries'
import { listUserStoriesWithTasks } from '../customGraphQL/queries'
import { Auth, Hub } from 'aws-amplify';

const userStoryInitialState = [{ user: '', goal: '', task: [''] }]
const userStoryInputInitialState = {user: '', activity: '', action: ''}
const techTaskInitialState = [{createdBy: '', type: '', description: '', userStoryId: ''}]
const techTaskInputInitialState = {type: '', description: ''}


const UserStories = () => {
  const [userStoryFormState, setUserStoryFormState] = useState(userStoryInputInitialState)
  const [userStories, setUserStories] = useState(userStoryInitialState)
  const [techTasks, setTechTasks] = useState(techTaskInitialState)
  const [techTaskFormState, setTechTaskFormState] = useState(techTaskInputInitialState)
  const [userName, setUserName] = useState(null)
  const [isEditing, setEditing] = useState({uuid:"", userStory:""})
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [isNewModalOpen, setNewModalOpen] = useState(false)
  const [isTechTaskModalOpen, setTechTaskModalOpen] = useState(false)
  const [storyUUID, setStoryUUID] = useState(null)

    //Fetch all data, save in hooks on load
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
      try {
        await setUserStoryInitialData();
        await setTechTaskInitialData();
        await setUserInitialData()
      } catch (err) { console.log('error fetching userStories: ', err) }
    }

    async function setUserStoryInitialData(){
      let userStoryData = await API.graphql(graphqlOperation(listUserStoriesWithTasks))
      console.log(userStoryData)
      setUserStories(userStoryData.data.listUserStorys.items)
    }

    async function setTechTaskInitialData(){
      let techTaskData = await API.graphql(graphqlOperation(listTechTasks))
      setTechTasks(techTaskData.data.listTechTasks.items)
    }

    //Get listFaQs, set items to setFAQs
    async function setUserInitialData(){
        try{
            let hubUserName = " "
            try{
              await Auth.currentSession()
              .then(data=>{
                hubUserName = data.idToken.payload.email
              })
            }  catch(error){
              console.log(error)
            }
            setUserName(hubUserName)
            console.log(hubUserName)
        }catch(err){
            console.log("Error w/ username retrieval: ", err)
            setUserName(" ")
        }
    }
    
    //Fetch data from each list function and save it to respective hooks
    // eslint-disable-next-line

    //Setters

    //set faq form with key and values from rendered form on change
    function setUserStoryInput(key, value) {
      setUserStoryFormState({...userStoryFormState,[key]: value })
    }


    function setTechTaskInput(key, value) {
      setTechTaskFormState({...techTaskFormState,[key]: value })
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

    async function addTechTask(){
      try {
        if (!techTaskFormState.type || !techTaskFormState.description){
          console.log("this")
          return
        }
        await API.graphql(graphqlOperation(createTechTask, {
          input: {
            createdBy: userName, 
            type:techTaskFormState.type,
            description: techTaskFormState.description,
            userStoryId: storyUUID
          }}))
        .then(fetchData())
        .then(setTechTaskModalOpen(false))
      } catch (err) {
        console.log('error creating tech task:', err)
      }
    }

    function openTechTaskModal(storyUUID){
      setTechTaskModalOpen(true)
      setStoryUUID(storyUUID)
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
            
            <MDBModal isOpen={isTechTaskModalOpen} toggle={()=>setTechTaskModalOpen(false)} size="fluid"  >
              <MDBModalHeader toggle={()=>setTechTaskModalOpen(false)}>Create new tech task</MDBModalHeader>
              <MDBModalBody>
                <div className="form-group">
                  <label htmlFor="userNameInput" className="disabled">User Name</label>
                  <input type="text" id="userNameInput" className="form-control" placeholder={userName} disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="userNameInput" className="disabled">Tech Task Type</label>
                  <input type="text" onChange={event => setTechTaskInput('type', event.target.value)} id="typeInput" className="form-control" placeholder="Slack, Website, etc. etc. " />
                </div>
                <div className="form-group">
                  <label htmlFor="userNameInput" className="disabled">Description</label>
                  <textarea type="textArea" id="userNameInput" className="form-control" onChange={event => setTechTaskInput('description', event.target.value)} id="typeInput" placeholder="Write as much as possible to describe task" />
                </div>
                
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={()=>setTechTaskModalOpen(false)}>Close</MDBBtn>
                <MDBBtn color="primary" onClick={()=>addTechTask()}>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModal>

            <MDBBtn className="mt-3" onClick={()=>setNewModalOpen(true)}>Add New Story</MDBBtn>
            <MDBModal isOpen={isNewModalOpen} toggle={()=>setNewModalOpen(false)} size="fluid"  >
              <MDBModalHeader toggle={()=>setNewModalOpen(false)}>New User Story</MDBModalHeader>
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
                          <>
                          <tr>
                            <td className="align-middle"><h5>{index+1}.</h5></td>
                            <td className="align-middle"><h5>{userStory.user}</h5></td>
                            <td className="align-middle"><h5>{userStory.goal}</h5></td>
                            <td className="align-middle">
                              <MDBCol>
                                <MDBBtn className="btn-floating btn-sm btn-fb" onClick={()=>deleteSpecifiedUserStory(userStory.id)}><MDBIcon icon="trash-alt" /></MDBBtn>
                                <MDBBtn className="btn-floating btn-sm warning-color" onClick={()=>deleteSpecifiedUserStory(userStory.id)}><MDBIcon icon="pencil-alt" /></MDBBtn>
                                <MDBBtn className="btn-floating btn-sm success-color" onClick={()=>openTechTaskModal(userStory.id)}><MDBIcon icon="plus-circle" /></MDBBtn>
                              </MDBCol>
                            </td>
                          </tr>  
                          {
                            console.log(userStory.task.items)
                          }
                          
                          </>
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