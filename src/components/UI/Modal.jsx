/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function BackdropComponent({ onHide }) {
  return <div onClick={onHide} className={classes.backdrop} />;
}
function ModalOverlayComponent({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export default function Modal({ children, onHide }) {
  return (
    <>
      {ReactDOM.createPortal(<BackdropComponent onHide={onHide} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlayComponent>{children}</ModalOverlayComponent>, portalElement)}
    </>
  );
}
