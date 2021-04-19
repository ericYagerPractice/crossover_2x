import React, { useEffect, useState} from 'react'
import { MDBContainer, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBCol, MDBRow, MDBIcon} from 'mdbreact';
import { API, graphqlOperation } from 'aws-amplify'
import { createFaq, deleteFaq } from '../graphql/mutations'
import { listFaQs } from '../graphql/queries'

const initialfaqState = { question: '', answer: '' }

const FAQs = () => {
  const [faqFormState, setFAQFormState] = useState(initialfaqState) //hook for faq form data input
  const [faqs, setFAQs] = useState([]) //hook to hold faqs 

    //Fetch all data, save in hooks on load
    useEffect(() => {
        fetchData()
    }, [])

    //Get listFaQs, set items to setFAQs
    async function getfaqs(){
        try{
            const faqData = await API.graphql(graphqlOperation(listFaQs))
            const faqs = faqData.data.listFAQs.items
            setFAQs(faqs)
            return(true)
        }catch(err){
            console.log("Error w/ faq retrieval: ", err)
            setFAQs(initialfaqState)
            return(false)
        }
    }
    
    //Fetch data from each list function and save it to respective hooks
    // eslint-disable-next-line
    async function fetchData() {
        try {
            await getfaqs()
        } catch (err) { console.log('error fetching faqs: ', err) }
    }

    //Setters

    //set faq form with key and values from rendered form on change
    function setFAQInput(key, value) {
      console.log(key,value)
        setFAQFormState({ ...faqFormState, [key]: value })
    }
    //Add functions

    //Add faq by pulling form state and setting it using hook function.  
    //Reset the form state.  
    //Call createFaq using the form state data and then re-fetch data
    async function addfaq() {
        try {
        if (!faqFormState.question || !faqFormState.answer) return
        const faq = { ...faqFormState }
        setFAQs([...faqs, faq])
        setFAQFormState(initialfaqState)
        await API.graphql(graphqlOperation(createFaq, {input: faq}))
        .then(fetchData())
        } catch (err) {
        console.log('error creating faq:', err)
        }
    }


    async function deleteSpecifiedFAQ(deleteID){
        try{
            await API.graphql(graphqlOperation(deleteFaq, {input: {id:deleteID}}))
            await fetchData()
        } catch(error){
            console.log("error deleting faq: ",error)
        }
    }

    
    
    //UI render
    return (
        <MDBContainer>
            <MDBRow className="mt-5">
                <MDBTable striped bordered hover size="sm">
                    <MDBTableHead>
                        <tr>
                            <th>#</th>
                            <th>FAQ</th>
                            <th>Answer</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                    {
                        faqs.map((faq, index) => (
                            <tr>
                                <td key={index}>{index}</td>
                                <td key={faq.id}>{faq.question}</td>
                                <td key={faq.id}>{faq.answer}</td>
                            </tr>
                        ))
                        }
                    </MDBTableBody>
                </MDBTable>
            </MDBRow>
      </MDBContainer>
    )
}

export default FAQs
