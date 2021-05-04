import React, { useEffect, useState} from 'react'
import { MDBContainer, MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBTypography, MDBCol, MDBRow, MDBTable, MDBTableBody, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBListGroup, MDBListGroupItem, MDBFormInline} from 'mdbreact';
import { API, graphqlOperation } from 'aws-amplify'
import { createUserStory, deleteUserStory, createTechTask, updateTechTask, deleteTechTask } from '../graphql/mutations'
import { listTechTasks } from '../graphql/queries'
import { listUserStoriesWithTasks } from '../customGraphQL/queries'
import { Auth, Hub } from 'aws-amplify';


const UserStory = () => {
  
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
      try {
        console.log("here")
      } catch (err) { console.log('error: ', err) }
    }

        
    //UI render
    return (
          <>
            
          </>

    )
}

export default UserStory