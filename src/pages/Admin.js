import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBLink } from 'mdbreact';
import FAQInput from '../components/faqInput'
import OfferingInput from '../components/offeringInput'
import PageInput from '../components/pageInput'


class Admin extends Component {

  state = {
    activeItemPills: '1'
  };

  togglePills = tab => () => {
    const { activePills } = this.state;
    if (activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  };

  render() {
    const { activeItemPills } = this.state;
    

    return (
      <MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='12'>
                <MDBNav className='nav-pills' style={{paddingTop:'10px'}}>
                  <MDBNavItem>
                    <MDBLink to='#' active={activeItemPills === '1'} onClick={this.togglePills('1')} link>
                      Edit FAQs
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={activeItemPills === '2'} onClick={this.togglePills('2')} link>
                      Edit Offerings
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#' active={activeItemPills === '3'} onClick={this.togglePills('3')} link>
                      Edit Pages
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={activeItemPills}>
                  <MDBTabPane tabId='1'>
                    <FAQInput />
                  </MDBTabPane>
                  <MDBTabPane tabId='2'>
                    <OfferingInput />
                  </MDBTabPane>
                  <MDBTabPane tabId='3'>
                    <PageInput />
                  </MDBTabPane>
                </MDBTabContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default Admin;