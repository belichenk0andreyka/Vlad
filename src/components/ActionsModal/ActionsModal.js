import * as React from 'react';

import Modal from 'react-modal';

import './ActionsModal.css';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background            : 'rgba(255, 255, 255, 1)',
    }
};

const ActionsModal = ({ isOpen, closeModal, btnText, onOpen, children }) => {
    return (
        <div>
            <button onClick={onOpen}>{btnText}</button>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                {children}
            </Modal>
        </div>
    );
}

export default ActionsModal;