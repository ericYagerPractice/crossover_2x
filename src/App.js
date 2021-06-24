import React, { useReducer, useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import Login from './pages/Login'
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import checkUser from './CheckUserStatus';
import Routes from './Routes';
import { MessageButton  } from './components/Buttons';
import { reducer } from './Helper';
import Amplify, { API,Hub } from 'aws-amplify'
import awsmobile from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsmobile);
API.configure();


const initialUserState = { user: null, loading: true }

function App() {
  const [userState, dispatch] = useReducer(reducer, initialUserState)
  const [formState, updateFormState] = useState('base')
  const [pageId] = useState(pageId)

  useEffect(() => {
    // set listener for auth events
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signIn') {
        setImmediate(() => dispatch({ type: 'setUser', user: payload.data }))
        setImmediate(() => window.history.pushState({}, null, 'http://localhost:3000/'))
        updateFormState('base')
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === 'signOut') {
        setTimeout(() => dispatch({ type: 'setUser', user: null }), 350)
      }
    })
    // we check for the current user unless there is a redirect to ?signedIn=true
    if (!window.location.search.includes('?signedin=true')) {
      checkUser(dispatch)
    }
  }, [])

  // This renders the custom form
  if (formState === 'email') {
    return (
      <div style={styles.appContainer}>
        <Header updateFormState={updateFormState} />
        <Login />
      </div>
      )
  }

  return (
    
    <Router>
      <div style={styles.appContainer}>
        <Header updateFormState={updateFormState} />
        <main className="mainContent" style={styles.postHeader}>
        <Routes />
        </main>
        <Footer />
        <MessageButton /> 
      </div>
    </Router>
  )
}

const styles = {
  appContainer: {
    paddingTop: 0,
  },
  postHeader: {
    marginTop: '5.5rem'
  },
}

export default App

