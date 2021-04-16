import React, { useEffect, useState} from 'react'
import { MDBContainer, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBCol, MDBRow, MDBIcon} from 'mdbreact';
import { API, graphqlOperation } from 'aws-amplify'
import { createUserStory, deleteUserStory } from '../graphql/mutations'
import { listUserStoriesWithTasks } from '../customGraphQL/queries'

const userStories = { user: '', goal: '', tasks: [''] }
const userStoryTechTasks = {createdBy: '', type: '', description: '', userStoryId: ''}

const UserStories = () => {
  const [userStoryFormState, setUserStoryFormState] = useState(null)
  const [userStories, setUserStories] = useState(userStories)
  const [techTasks, setTechTasks] = useState(userStoryTechTasks)

    //Fetch all data, save in hooks on load
    useEffect(() => {
        fetchData()
    }, [])

    //Get listFaQs, set items to setFAQs
    async function getUserStories(){
        try{
            const userStoryData = await API.graphql(graphqlOperation(listUserStoriesWithTasks))
            console.log(userStoryData)
            const userStories = userStoryData.data.listUserStorys.items
            setUserStories(userStories)
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
            await getUserStories()
        } catch (err) { console.log('error fetching userStories: ', err) }
    }

    //Setters

    //set faq form with key and values from rendered form on change
    function setUserStoryInput(key, value) {
      console.log(key,value)
        setUserStoryFormState({ ...userStoryFormState, [key]: value })
    }
    //Add functions

    //Add faq by pulling form state and setting it using hook function.  
    //Reset the form state.  
    //Call createFaq using the form state data and then re-fetch data
    async function addUserStory() {
        try {
        if (!userStoryFormState.question || !userStoryFormState.answer) return
        const userstory = { ...userStoryFormState }
        //setUserStories([...userStories, faq])
        //setUserStoryFormState(userStories)
        //await API.graphql(graphqlOperation(createUserStory, {input: userstory}))
        .then(fetchData())
        } catch (err) {
        console.log('error creating user story:', err)
        }
    }


    async function deleteSpecifiedUserStory(deleteID){
        try{
            await API.graphql(graphqlOperation(deleteUserStory, {input: {id:deleteID}}))
            await fetchData()
        } catch(error){
            console.log("error deleting user story: ",error)
        }
    }

    
    
    //UI render
    return (
        <MDBContainer>

            
        </MDBContainer>
    )
}

export default UserStories
