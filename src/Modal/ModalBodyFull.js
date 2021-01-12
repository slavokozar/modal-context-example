import React from 'react';

export default function ModalBodyFull({children}) {
    return (
        <div className="modal__body body__full">
            <div className="modal__full">
                {children}
            </div>
        </div>
    )
}