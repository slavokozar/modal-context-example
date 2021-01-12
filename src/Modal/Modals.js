import React, {useContext, useEffect} from "react";
import Modal from "./Modal";
import {ModalContext} from "../ModalContext";


export default function Modals() {
    const {modals, modalOpen, modalClose} = useContext(ModalContext);

    useEffect(() => {
        if (modals.length > 0) {
            document.querySelector('body').classList.add('modal-open')
        } else {
            document.querySelector('body').classList.remove('modal-open')
        }
    }, [modals.length]);

    return modals.map((modal, i) => {
        const backdrop = (i === modals.length - 1);

        return React.cloneElement(
            <Modal/>,
            Object.assign(
                {
                    backdrop,
                    key: modal.id
                },
                modal
            )
        );

    })
}