import React, {useContext} from 'react';
import ExampleModal from "./ExampleModal";
import {ModalContext} from "./ModalContext";

export default function ModalOpeningComponent() {
    // eslint-disable-next-line no-undef
    const {modalOpen} = useContext( ModalContext );

    return (
        <div style={{margin: '2rem'}}>
            <button
                onClick={() => {
                    modalOpen({
                        status: 'primary',
                        size: 'small',
                        content: <ExampleModal
                                    handleSuccess={() => {
                                        console.log('modal was successfully closed');
                                    }}
                                />
                    });
                }}>
                OpenModal
            </button>
        </div>
    )
}