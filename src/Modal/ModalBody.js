import React from 'react';

export default function ModalBody({children}) {
    return (
        <div className="modal__body">
            <div className="modal__full">
                {children}
            </div>
        </div>
    )
}