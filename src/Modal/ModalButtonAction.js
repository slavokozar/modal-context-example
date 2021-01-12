import React from 'react';

export default function ModalButtonAction({label, handleClick}) {
    return (
        <button className="btn btn--action btn--s" onClick={handleClick}>{label}</button>
    )
}