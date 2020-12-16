import React, { useReducer, useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Login from './pages/Login'
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import checkUser, { signOut } from './CheckAuth';

import { reducer } from './Helper';

import { Hub, Auth } from 'aws-amplify'
import { FaSignOutAlt } from 'react-icons/fa'

const initialUserState = { user: null, loading: true }

function App() {
  const [userState, dispatch] = useReducer(reducer, initialUserState)
  const [formState, updateFormState] = useState('base')

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
        {
          userState.loading && (
            <div style={styles.body}>
              <p>Loading...</p>
            </div>
          )
        }
        {
          !userState.user && !userState.loading && (
            <Buttons
              updateFormState={updateFormState}
            />
          )
        }
        {
          userState.user && userState.user.signInUserSession && (
            <div style={styles.body}>
              <h4>
                Welcome {userState.user.signInUserSession.idToken.payload.email}
              </h4>
              <button
                style={{ ...styles.button, ...styles.signOut }}
                onClick={signOut}
              >
                <FaSignOutAlt color='white' />
                <p style={{...styles.text}}>Sign Out</p>
              </button>
            </div>
          )
        }
        <Footer />
      </div>
    </Router>
  )
}

const styles = {
  appContainer: {
    paddingTop: 85,
  },
  loading: {

  },
  button: {
    marginTop: 15,
    width: '100%',
    maxWidth: 250,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px 16px',
    borderRadius: 2,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    minHeight: 40
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  signOut: {
    backgroundColor: 'black'
  },
  footer: {
    fontWeight: '600',
    padding: '0px 25px',
    textAlign: 'right',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  anchor: {
    color: 'rgb(255, 153, 0)',
    textDecoration: 'none'
  },
  body: {
    padding: '0px 30px',
    height: '78vh'
  }
}

export default App
