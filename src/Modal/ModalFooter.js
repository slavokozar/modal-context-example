import React from 'react';

export default function ModalHeader({children}) {
    return (
        <div className="modal__footer d--flex ai--c jc--fe">
            {children}
        </div>
    )
}