import React, {useRef, useState, useEffect, useContext} from "react";

import useOutsideClick from "../useOutsideClick";
import ModalLoader from "./ModalLoader";
import ModalSuccess from "./ModalSuccess";
import ModalClose from "./ModalClose";
import {ModalContext} from "..//ModalContext";

export default function Modal({id, content, backdrop, status, size, closeButton, successLabel}) {
    const {modalClose} = useContext(ModalContext);

    const [closing, setClosing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const ref = useRef(null);

    const close = () => {
        setClosing(true);
        setTimeout(() => {
            console.log(id);
            modalClose({id});
        }, 500);
    }

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                close();
            }, 2500);
        }
    }, [success])

    useOutsideClick(ref, () => {
        close();
    });

    const getModalSizeClass = (size) => {
        if (size === 'large') {
            return 'modal--l';
        } else if (size === 'small') {
            return 'modal--s';
        } else {
            return 'modal--m';
        }
    }

    return (
        <>
            {
                backdrop && (
                    <div className={`modal__backdrop ${status}`}/>
                )
            }
            <div className="modal-wrapper">
                <div ref={ref}
                     className={`modal ${status} ${getModalSizeClass(size)} ${(closing ? 'closing' : '')}`}>

                    {
                        closeButton && (
                            <ModalClose close={close}/>
                        )
                    }

                    {loading && <ModalLoader/>}
                    {success && <ModalSuccess label={successLabel}/>}

                    {
                        React.cloneElement(content, {
                            setLoading,
                            setSuccess,
                            close
                        })
                    }
                </div>
            </div>
        </>
    )
}
