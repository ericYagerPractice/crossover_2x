import React, { useEffect, useState} from 'react'
import { MDBContainer, MDBInputGroup, MDBInput, MDBBtn, MDBTypography, MDBRow, MDBTable, MDBTableHead, MDBTableBody} from 'mdbreact';
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

  const dataTableColumns = {columns: [
    {
      'label': 'User Name',
      'field': 'username',
      'sort': 'asc'
    },
    {
      'label': 'Story',
      'field': 'story',
      'sort': 'asc'
    },
    {
      'label': 'Delete',
      'field': 'delete',
    }
  ]}

    //Fetch all data, save in hooks on load
    useEffect(() => {
        fetchData()
        .then(console.log(userStories))
    }, [])

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
          .then(data=>console.log(data))
          .then(fetchData())
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
            <MDBRow className="ml-5" start>
              <MDBInputGroup
                material
                containerClassName="m-0"
                className="align-text-bottom form-inline"
                inputs={
                  <>
                    <table>
                      <td className="align-middle"><MDBTypography tag="h3" variant="h3-responsive">I am a </MDBTypography></td>
                      <td className="align-middle"><MDBInput background onChange={event => setUserStoryInput('user', event.target.value)} /></td>
                      <td className="align-middle"><MDBTypography tag="h3" variant="h3-responsive">, and I want to</MDBTypography></td>
                      <td className="align-middle"><MDBInput background onChange = {event => setUserStoryInput('activity', event.target.value)}/></td>
                      <td className="align-middle"><MDBTypography tag="h3" variant="h3-responsive">, so that </MDBTypography></td>
                      <td className="align-middle"><MDBInput background onChange = {event => setUserStoryInput('action', event.target.value)}/></td>
                      <td className="align-middle"><MDBBtn color="danger" onClick={()=>addUserStory()}>Send it</MDBBtn></td>
                    </table>
                  </>
                }
              />
            </MDBRow>
            <hr />
            <MDBContainer>
              <MDBRow className="ml-5">
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <th>ID</th>
                      <th>Submitted By</th>
                      <th>User Story</th>
                      <th>Delete</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {
                      userStories.map((userStory)=>(

                          <tr>
                            <td>{userStory.id}</td>
                            <td>{userStory.user}</td>
                            <td>{userStory.goal}</td>
                            <td><MDBBtn onClick={event=>deleteSpecifiedUserStory(userStory.id)}>Delete</MDBBtn></td>
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