import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,

} from 'mdbreact';
  import React, { useState } from 'react';
  import './Header.css';
  import c2xlogonav from '../staticfiles/c2xlogonav.png';

export default function Header() { 
  const [collapseID, setcollapseID] =useState(false);

  return (
      <>
        <MDBNavbar color='elegant-color' className='py-3 px-4 border-danger border-bottom border-top-0 border-left-0 border-right-0' dark expand='md' fixed='top' scrolling>
          <MDBNavbarBrand href='/' className='py-0 font-weight-bold mr-4'>
              <img
                  src={c2xlogonav}
                  alt="Crossover2X"
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
          
          </MDBCollapse>
        </MDBNavbar>
    
    </>
  );
}
