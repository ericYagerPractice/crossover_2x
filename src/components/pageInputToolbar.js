import React, {useState} from 'react'
import './pageInputToolbar.css'
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBTypography } from "mdbreact";
export default function Toolbar() {
    const [showLinkModal, modalSwitch] = useState(false);

    function showTheModal(){
        modalSwitch(!showLinkModal);
    }

    function format(com, val) {
        console.log(com, val);
        document.execCommand(com, false, val);
    }

    function addLink(codeElement){
        console.log(codeElement)
        showTheModal();
        const show = document.getElementById('url-input');
        if (show.classList.contains('hidden')) {
          show.classList.remove('hidden');
        } else {
          show.classList.add('hidden');
        }
    }
  
    function setUrl(e) {
        e.preventDefault()
        const url = document.getElementById('txtFormatUrl').value;
        const show = document.getElementById('url-input');
        const text = document.getSelection();
        format(
            'insertHTML', 
            `<a href='${url}' target='_blank'>${text}
            </a>`
        );
        document.getElementById('txtFormatUrl').value = '';
        show.classList.add('hidden');
        showTheModal();
    } 
  
    function setHeader() {
        const target = document.getSelection();
        format('insertHTML', `<h2>${target}</h2>`);
    }

    function addCodeBlock() {
        const codeBlock = document.createElement('pre');
        const target = document.getSelection();
        if (
          target.focusNode.nodeName.includes('#text') ||
          target.focusNode.classList.contains('title') ||
          target.focusNode.className.includes('codeBlock')
        ) {
          return
        }
        const id = `codeBlock-${
          document.getElementsByClassName('codeBlock').length + 1
        }`;
        codeBlock.classList.add('codeBlock')
       
        format(
          'insertHTML',
          `<pre class='codeBlock' id='${id}'>${target}</pre>`
        ); 
        addLineAfterBlock(id)
    }

    function addLineAfterBlock(id) {
        const block = document.getElementById(`${id}`);
        const div = document.createElement('div');
        const br = document.createElement('br');
        div.appendChild(br);
        
        if (!block) {
          return;
        } else {
          block.after(div);
        }
    }
  
    function handleSubmit() {
        const content = document.getElementById('editor').innerHTML;
        const title = document.getElementById('title').textContent;
        const post = {
          title,
          content   
        };
       console.log(post);
       // do an api post request here, save to state, etc...
    }
  return (

    <div className='toolbar'>
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <MDBBtn color="elegant" onClick={textElement=> format('bold')}><b>Bold</b></MDBBtn>
            <MDBBtn color="elegant" onClick={textElement=> format('italic')}><i>Italic</i></MDBBtn>
            <MDBBtn color="elegant" onClick={textElement=> format('insertUnorderedList')}><li>List</li></MDBBtn>
            <MDBBtn color="elegant" onClick={textElement=> addLink(textElement)}>Link <i class="fas fa-link"></i></MDBBtn>

            <MDBModal isOpen={showLinkModal} toggle={showTheModal}   size="lg" >
              <MDBModalHeader toggle={showTheModal}>Upload new file</MDBModalHeader>
              <MDBModalBody>
                <MDBTypography tag='h4' variant="h4-responsive">Hyperlink</MDBTypography>
                <input id='txtFormatUrl' placeholder='url'/>
                <button onClick={textElement=> setUrl(textElement)}>Create Link</button>
              </MDBModalBody>
              <MDBModalFooter>
              <MDBBtn color="secondary" onClick={showTheModal}>Close</MDBBtn>
              </MDBModalFooter>
          </MDBModal>
            <MDBBtn color="elegant" onClick={textElement=> setHeader()}><i class="fas fa-heading">eading</i></MDBBtn>
            <MDBBtn color="elegant" onClick={textElement=> addCodeBlock()}>Code <i class="fas fa-code"></i></MDBBtn>
            <MDBBtn color="elegant" onClick={textElement=> handleSubmit()}>Send <i class="fas fa-paper-plane"></i></MDBBtn>
        </div>

    </div>
  )
}