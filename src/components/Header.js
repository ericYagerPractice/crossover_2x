import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  Row
} from 'mdbreact';
import React, { useReducer, useEffect, useState } from 'react';
import './Header.css';
import c2xlogonav from '../staticfiles/c2xlogonav.png';
import checkUser from '../CheckAuth';
import LoginButtons from './Buttons';
import { reducer } from '../Helper';
import { Auth, Hub } from 'aws-amplify';
import {AccountButton, AdminButton } from './Buttons';
import { checkHost } from '../Helper';

const initialUserState = { user: null, loading: true }

export default function Header() { 
  const [collapseID, setcollapseID] =useState(false);
  const [userState, dispatch] = useReducer(reducer, initialUserState)
  const [formState, updateFormState] = useState('base')
  const [isAdmin, checkAdminStatus] = useState(false);

  async function onload(){
    await Auth.currentSession()
    .then(data=>{
      checkAdminStatus(data.idToken.payload['cognito:groups'].includes('Admin'));
    })
    .catch(err=>console.log('error checking admin status: ',err));
  }

  useEffect(() => {
    onload();
    var hostName=checkHost();
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signIn') {
        setImmediate(() => {
          dispatch({ type: 'setUser', user: payload.data })
        })
        setImmediate(() => window.history.pushState({}, null, hostName))
        updateFormState('base')
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === 'signOut') {
        setTimeout(() => {
          dispatch({ type: 'setUser', user: null })
          console.log(userState)
        }, 350)
      }
    })
    // we check for the current user unless there is a redirect to ?signedIn=true
    if (!window.location.search.includes('?signedin=true')) {
      checkUser(dispatch)
    }
  }, [])

  return (
      <>
        <MDBNavbar color='elegant-color' className='py-3 px-4 border-danger border-bottom border-top-0 border-left-0 border-right-0' dark expand='md' fixed='top' scrolling>
          <MDBNavbarBrand href='/' className='py-0 font-weight-bold mr-4'>
              <img
                  src={c2xlogonav}
                  alt="Crossover2X"
                  style={{width:"250px"}}
              />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={() => setcollapseID(!collapseID)}
          />
          <MDBCollapse id='mainNavbarCollapse' navbar isOpen={collapseID}>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink
                  exact
                  to='/'
                  onClick={() =>setcollapseID(!collapseID)}
                >
                  <strong>Home</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to='/About'
                  onClick={() => setcollapseID(!collapseID)}
                >
                  <strong>About</strong>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {
                userState.loading && (
                  <div>
                    <p style={{color: 'white'}}>Loading...</p>
                  </div>
                )
              }
              {
                !userState.user && !userState.loading && (
                  <LoginButtons
                    updateFormState={updateFormState}
                  />
                )
              }
              {
                userState.user && userState.user.signInUserSession && (
                    <Row>
                        {isAdmin && (
                          <AdminButton />
                        )}
                        <AccountButton />
                    </Row>
                )
              }
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
    
    </>
  );
}
/*
<h6 style={{color: 'white'}}>
                      {userState.user.signInUserSession.idToken.payload.email}
                    </h6>*/