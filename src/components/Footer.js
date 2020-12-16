import React from 'react';
import { 
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBBtnFixed,
} from 'mdbreact';

import {AccountButton} from './Buttons'

export default function Footer() { 
    return(
        <>
            <MDBFooter color="elegant-color-dark" className="page-footer font-small fixed-bottom px-3 pt-2 pb-1" style={{height:"65px"}}>  
                <MDBRow className="d-flex align-items-center">
                    <MDBCol className="text-left">
                        <ul className="list-unstyled list-inline">  
                            <li className="list-inline-item"> 
                                <a href="https://www.facebook.com/crossover2x" className="btn-floating btn-sm btn-fb mx-1" target="_blank"> 
                                    <i className="fab fa-facebook-f"> </i>  
                                </a>  
                            </li> 
                            <li className="list-inline-item"> 
                                <a href="/" className="btn-floating btn-sm btn-tw mx-1"> 
                                    <i className="fab fa-twitter"> </i> 
                                </a>  
                            </li> 
                            <li className="list-inline-item"> 
                                <a href="https://www.linkedin.com/company/crossover2x" className="btn-floating btn-sm btn-li mx-1" target="_blank"> 
                                    <i className="fab fa-linkedin-in"> </i> 
                                </a>  
                            </li> 
                        </ul> 
                    </MDBCol>
                    <MDBCol className="text-center">
                        <a href="/Privacy">Privacy Policy</a>
                    </MDBCol>
                    <MDBCol>
                        <p className="text-right">&copy; {new Date().getFullYear()} Copyright: <a href="https://www.crossover2x.net"> Crossover 2X </a></p>
                    </MDBCol>
                </MDBRow>
                <AccountButton />
            </MDBFooter>  
        </>
    )
}