import React, { useState } from 'react';
import {Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Example =()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div  className="pop" style={{textAlign:"center"}} >
      <Button  variant="primary"  onClick={handleShow}>
        Delete
      </Button>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You sure to want to delete the record</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Example