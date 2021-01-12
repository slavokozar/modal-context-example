import React from 'react';

export default function ModalButtonCancel({heading, handleClose, label = null}) {
    return (
        <button
            className="btn btn--s btn--cancel mr--xs"
            onClick={(e) => {
                e.preventDefault();
                handleClose();
            }}
        >
            cancel
        </button>
    )
}