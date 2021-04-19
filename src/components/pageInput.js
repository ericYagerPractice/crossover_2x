import React from 'react';
import Toolbar from './pageInputToolbar';
import './pageInput.css';

export default function PageEditor() {
  
    function paste(e) {
      console.log(e)
      e.preventDefault();
      const open = new RegExp('<', 'gi');
      const close = new RegExp('>', 'gi');
      const text = (e.originalEvent || e).clipboardData
        .getData('text/plain')
        .replace(open, '&lt')
        .replace(close, '&gt');
      document.execCommand('insertHTML', false, text)
    }
  
  return (
    <>
      <React.Fragment>
        <Toolbar />
        <div
          id='title'
          contentEditable='true'
          data-placeholder='Content Title'
          className='title'
        ></div>
        
        <div
          className='editor'
          id='editor'
          contentEditable='true'
          data-placeholder='Content Body'
          onPaste={(e) => {
            console.log(e)
            paste(e)
          }}
        ></div>
      </React.Fragment>
    </>
  );
}