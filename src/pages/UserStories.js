import React, { useEffect, useState} from 'react'
import { MDBContainer, MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBTypography, MDBCol, MDBRow, MDBTable, MDBTableBody, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBListGroup, MDBListGroupItem, MDBFormInline, MDBBox } from 'mdbreact';
import { API, graphqlOperation } from 'aws-amplify'
import { createUserStory, deleteUserStory, createTechTask, updateTechTask, deleteTechTask } from '../graphql/mutations'
import { listTechTasks } from '../graphql/queries'
import { listUserStoriesWithTasks } from '../customGraphQL/queries'
import { Auth, Hub } from 'aws-amplify';

const userStoryJSXInitialState = []
const userStoryInputInitialState = {user: '', activity: '', action: ''}
const techTaskInputInitialState = {type: '', description: ''}

class AdminStatus { 
  async componentDidMount(){
    const returnData = await Auth.currentAuthenticatedUser()
    try{
      return(returnData.signInUserSession.idToken.payload['cognito:groups'].includes('Admin'));
    } catch{
      return(false);
    }
    
  }
}

const UserStories = () => {
  const [userStoryFormState, setUserStoryFormState] = useState(userStoryInputInitialState)
  const [techTaskFormState, setTechTaskFormState] = useState(techTaskInputInitialState)
  const [userName, setUserName] = useState(null)
  const [isNewModalOpen, setNewModalOpen] = useState(false)
  const [isTechTaskModalOpen, setTechTaskModalOpen] = useState(false)
  const [storyUUID, setStoryUUID] = useState(null)
  const [userStoryJSX, setUserStoryJSX] = useState(userStoryJSXInitialState)
    //Fetch all data, save in hooks on load
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
      try {
        await setUserStoryInitialData();
        await setUserInitialData()
      } catch (err) { console.log('error fetching userStories: ', err) }
    }

    async function setUserStoryInitialData(){
      let userStoryData = await API.graphql(graphqlOperation(listUserStoriesWithTasks))
      let returnData = userStoryData.data.listUserStorys.items.map(story=>{
        try{
          return(
            <>
            <MDBContainer className="border border-light">
              <MDBRow className="justify-content-center mt-2">
                <MDBCol>
                  <MDBTypography blockquote>
                    <MDBBox tag="p" mb={0}>
                      <h5>{story.goal}</h5>
                    </MDBBox>
                    <MDBBox tag="footer" mb={3} className="blockquote-footer">{story.user}</MDBBox>
                  </MDBTypography>
                </MDBCol>
                
              </MDBRow>
              <MDBRow className="justify-content-center mb-2">
                {story.task.items.map((task, index)=>(
                  <MDBListGroup>
                    <MDBListGroupItem hover style={{ width: "40rem" }}>
                      <div className="d-flex w-100 justify-content-between">
                        <h4 className="mb-1">{task.type} Task</h4>
                        <small>{task.createdBy}</small>
                      </div>
                      <p className="mb-1">{task.description}</p>
                      <MDBFormInline className="justify-content-center bg-light">
                      {task.currentStatus=='Requirements' ?
                          <MDBInput
                            checked
                            label='Requirements'
                            type='checkbox'
                            containerClass='mr-5'
                            id={'requirementsCheckbox'+index}
                            onChange={()=>updateTechTaskStatus(task.id, '')}
                          />
                      :
                          <MDBInput
                            label='Requirements'
                            type='checkbox'
                            id={'requirementsCheckbox'+index}
                            containerClass='mr-5'
                            onChange={()=>updateTechTaskStatus(task.id, 'Requirements')}
                          />
                        }
                        {task.currentStatus=='Implementation' ?
                          <MDBInput
                            checked
                            label='Implementation'
                            type='checkbox'
                            id={'implementationCheckbox'+index}
                            containerClass='mr-5'
                            onChange={()=>updateTechTaskStatus(task.id, '')}
                          />
                        :
                          <MDBInput
                            label='Implementation'
                            type='checkbox'
                            id={'implementationCheckbox'+index}
                            containerClass='mr-5'
                            onChange={()=>updateTechTaskStatus(task.id, 'Implementation')}
                          />
                        }
                        {task.currentStatus=='Complete' ?
                          <MDBInput
                            checked
                            label='Complete'
                            type='checkbox'
                            id={'completeCheckbox'+index}
                            containerClass='mr-5'
                            onChange={()=>updateTechTaskStatus(task.id, '')}
                          />
                        :
                          <MDBInput
                            label='Complete'
                            type='checkbox'
                            id={'completeCheckbox'+index}
                            containerClass='mr-5'
                            onChange={()=>updateTechTaskStatus(task.id, 'Complete')}
                          />
                      }
                      </MDBFormInline>
                      <div className="d-flex justify-content-center">
                          <MDBBtn
                            floating
                            tag="a"
                            onClick={()=>deleteSpecifiedTechTask(task.id)}
                            size="sm"
                            color="danger">
                            <MDBIcon icon="trash" />
                          </MDBBtn>
                          <MDBBtn
                            floating
                            tag="a"
                            href={'/UserStories/'+task.id}
                            size="sm"
                            color="success">
                            <MDBIcon icon="info-circle" />
                          </MDBBtn>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <MDBCol>
                              <MDBRow><MDBTypography tag='h6'><small><strong>Created: &nbsp;&nbsp;</strong> {calculateDays(task.createdAt)} day(s) ago </small></MDBTypography></MDBRow>
                            </MDBCol>
                            <MDBCol>
                              <MDBRow><MDBTypography tag='h6'><small><strong>Last updated:&nbsp;&nbsp; </strong> {calculateDays(task.updatedAt)} day(s) ago</small></MDBTypography></MDBRow>
                            </MDBCol>
                        </div>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  ))}
              </MDBRow>
              <MDBRow fluid className="justify-content-end">
                <MDBCol size="3">
                  <MDBBtn className="btn-floating btn-sm btn-fb" onClick={()=>deleteSpecifiedUserStory(story.id)}><MDBIcon icon="trash-alt" /></MDBBtn>
                  <MDBBtn className="btn-floating btn-sm success-color" onClick={()=>openTechTaskModal(story.id)}><MDBIcon icon="plus-circle" /></MDBBtn>
                </MDBCol>
              </MDBRow>

              </MDBContainer>
              <hr />
            </>
          )
        }catch{
          return(
            <>
              <MDBRow className="ml-5">
                <MDBCol size="3">
                  <h5>Not Found</h5>
                </MDBCol>
                <MDBCol size="6">
                  <h5>Not Found</h5>
                </MDBCol>
                <MDBCol size="3">
                  <MDBBtn className="btn-floating btn-sm btn-fb" disabled><MDBIcon icon="trash-alt" /></MDBBtn>
                  <MDBBtn className="btn-floating btn-sm success-color" disabled><MDBIcon icon="plus-circle" /></MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow className="justify-content-center">
                <MDBListGroup>
                      <MDBListGroupItem hover style={{ width: "40rem" }}>
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">{task.type} Task</h5>
                          <small>Not Found</small>
                        </div>
                        <p className="mb-1">Not Found</p>
                      </MDBListGroupItem>
                </MDBListGroup>
              </MDBRow>
            </>
          )
        }
      })
      setUserStoryJSX(returnData)
    }

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
        }catch(err){
            console.log("Error w/ username retrieval: ", err)
            setUserName(" ")
        }
    }
    
     function setUserStoryInput(key, value) {
      setUserStoryFormState({...userStoryFormState,[key]: value })
    }

    function setTechTaskInput(key, value) {
      setTechTaskFormState({...techTaskFormState,[key]: value })
    }
    
    async function addUserStory() {
        try {
          if (!userStoryFormState.user || !userStoryFormState.activity || !userStoryFormState.action){
            return
          }
          let userStoryInputString = "I am a "+userStoryFormState.user+" and I need to "+userStoryFormState.activity+" so I can "+userStoryFormState.action
          await API.graphql(graphqlOperation(createUserStory, {input: {user: userName, goal: userStoryInputString}}))
          .then(setUserStoryInitialData())
          setNewModalOpen(false)
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

    async function deleteSpecifiedTechTask(deleteID){
      try{
          await API.graphql(graphqlOperation(deleteTechTask, {input: {id:deleteID}}))
          .then(await fetchData())
      } catch(error){
          console.log("error deleting tech task: ",error)
      }
    }

    async function addTechTask(){
      try {
        if (!techTaskFormState.type || !techTaskFormState.description){
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
        setTechTaskModalOpen(false)
      } catch (err) {
        console.log('error creating tech task:', err)
      }
    }

    async function updateTechTaskStatus(techId, updateValue){
      try{
        let task = await API.graphql(graphqlOperation(updateTechTask,{
          input:{
            id: techId,
            currentStatus: updateValue
          }
        }))
        task.then(location.reload())
      } catch(err){
        console.log('error updating tech task: ',err)
      }
    }

    function openTechTaskModal(storyUUID){
      setTechTaskModalOpen(true)
      setStoryUUID(storyUUID)
    }

    function calculateDays(inputDate){
      let today = new Date()
      let start = new Date(inputDate)
      return(Math.round((today - start)/ (60*60*24*1000)))
    }
    
    //UI render
    return (
          <>
            <MDBBtn style={{ bottom: "-20px", left: "50px" }} onClick={()=>setNewModalOpen(true)}>Add New Story</MDBBtn>
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
              {userStoryJSX}
            </MDBContainer>
          </>

    )
}

export default UserStories