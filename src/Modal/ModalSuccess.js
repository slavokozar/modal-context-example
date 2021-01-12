import React from 'react';

export default function ModalSuccess({label = 'Hotovo!'}) {
    return (
        <div className="modal__success">
            <div className="loader__content">
                <div className={'success__icon'}>
                    <i className="far fa-check"></i>
                </div>
                <h4>{label}</h4>
            </div>

        </div>
    )
}