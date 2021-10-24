import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
} from 'mdbreact';

import MenuCardData from './MenuCardData';
import './MenuCards.css';

const menuCards = MenuCardData.map((item, i) => {
  return(
    <MDBCol key={i} md="6" xl="4" className="px-2">
      <MDBAnimation reveal type="fadeInLeft">
        <MDBCard cascade className="my-2 p-3 border-2 border-gray-100 rounded-3 hover-zoom d-flex flex-column flex-sm-row align-items-center">
          <img
            className="d-block my-2 card-icon"
            src={item.icon}
            alt="Card Icon"
          />
          <MDBCardBody cascade className="w-75 py-0 pl-0 pl-sm-3 pr-0 text-left dark-text">
            <MDBCardText className="m-0 text-dark font-weight-normal text-center text-sm-left">
              {item.introTitle}
            </MDBCardText>
            <MDBCardTitle className="m-0 text-center text-sm-left">
              {item.title}
            </MDBCardTitle>
            <hr className="w-25 mt-2 ml-auto ml-sm-0 mr-auto text-left border-danger" />
            <ul className="card-list mt-2 p-0 mx-auto text-center text-sm-left">
            {item.links.map((item, i) => (
              <li key={i} className={item.rotateIcon === true ? 'rotate-icon' : null}>
                <MDBIcon className="mr-2" icon={item.icon} />
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
            </ul>
            <MDBNavLink
              tag="button"
              to={item.ctaUrl}
              className="btn btn-lg btn-outline-dark px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center"
            >
              Learn More <MDBIcon icon="caret-right" className="ml-3" size="2x"></MDBIcon>
            </MDBNavLink>
          </MDBCardBody>
        </MDBCard>
      </MDBAnimation>
    </MDBCol>
  );
});

function MenuCards() {
  return(
    <MDBContainer className="menu-cards w-100 mt-5 pt-2 pt-md-5">
      <MDBRow>
        <MDBCol md="12" className="mx-auto">
          <MDBRow>
            <MDBCol md="8" className="mx-auto px-4">
              <h2 className="section-title m-0 text-center text-uppercase">
                C<span className="text-danger">2X</span><br/> Atomic Offerings
              </h2>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-3">
            {menuCards}
          </MDBRow>

          <MDBRow className="mt-5">
            <MDBCol>
              <hr className="pt-5" />
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default MenuCards;