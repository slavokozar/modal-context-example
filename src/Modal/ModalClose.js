import React from 'react';

export default function ModalClose({close}) {
    return (
        <button
            className="modal__close d--flex ai--c jc--c"
            onClick={() => {
                close();
            }}
        >
            <i className="fal fa-times"></i>
        </button>
    )
}