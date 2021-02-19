import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBLink } from 'mdbreact';
import FAQInput from '../components/faqInput'
import OfferingInput from '../components/offeringInput'


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
                      Contact
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
                    <p>
                      Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis
                      ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex
                      labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
                      aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit
                      labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure
                      magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt
                      ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit
                      voluptate voluptate consequat non.
                    </p>
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