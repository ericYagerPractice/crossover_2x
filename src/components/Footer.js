import React from 'react';
import { 
    MDBFooter,
    MDBRow,
    MDBCol,
} from 'mdbreact';
import { SocialButtons } from './Buttons'

export default function Footer() { 
    return(
        <>
            <MDBFooter color="elegant-color-dark" className="page-footer font-small fixed-bottom mt-2 px-3 pt-0 pb-0" >  
                <MDBRow className="d-flex align-items-center">
                    <SocialButtons />
                    <MDBCol className="text-center">
                        <a href="/Privacy">Privacy Policy</a>
                    </MDBCol>
                    <MDBCol>
                        <p className="text-right">&copy; {new Date().getFullYear()} Copyright: <a href="https://www.crossover2x.net"> Crossover 2X </a></p>
                    </MDBCol>
                </MDBRow>
            </MDBFooter>  
        </>
    )
}