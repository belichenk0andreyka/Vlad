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
        transform             : 'translate(-50%, -50%)'
    }
};

const ActionsModal = ({ onSubmit, isOpen, closeModal, btnText, onOpen, id }) => {
    const onSubmitHandler = () => onSubmit(id);
    return (
        <div>
            <button onClick={onOpen}>{btnText}</button>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className='modal'>
                    <h2>Confirm</h2>
                    <div>Are you sure?</div>
                    <div className='modal__buttons'>
                        <button onClick={onSubmitHandler}>Yes</button>
                        <button onClick={closeModal}>No</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ActionsModal;