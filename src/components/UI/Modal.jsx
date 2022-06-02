/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function BackdropComponent() {
  return <div className={classes.backdrop} />;
}
function ModalOverlayComponent({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export default function Modal({ children }) {
  return (
    <>
      {ReactDOM.createPortal(<BackdropComponent />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlayComponent>{children}</ModalOverlayComponent>, portalElement)}
    </>
  );
}
