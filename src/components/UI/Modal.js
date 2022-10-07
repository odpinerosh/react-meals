import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

const BackDrop = props => {
    return (
        <div className='modal-backdrop' onClick={props.onClose}>

        </div>
    )
}

const ModalOverlay = props => {

    return (
        <div className='modal'>
            {props.children}
        </div>
    );

}

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}



export default Modal;