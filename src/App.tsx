import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
} from 'mdbreact';
import React from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = React.useCallback(() => {
    setIsOpen((open) => !open);
  }, []);
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {/* @ts-ignore */}
      <MDBModal isOpen={isOpen} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>(...)</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>
            Close
          </MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
  );
}

export default App;
