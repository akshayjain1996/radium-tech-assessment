// src/components/Modal.js
import React from 'react';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
                <button onClick={onClose} className="float-right text-gray-700 hover:text-gray-900">
                    <i className="fas fa-times"></i>
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;