import React from "react";

import ModalHeader from "./Modal/ModalHeader";
import ModalBody from "./Modal/ModalBody";
import ModalButtonCancel from "./Modal/ModalButtonCancel";
import ModalFooter from "./Modal/ModalFooter";
import ModalButtonSubmit from "./Modal/ModalButtonSubmit";

export default function ExampleModal({close, setSuccess}) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setSuccess(true);
        }}>
            <ModalHeader heading="example modal"/>

            <ModalBody>
                <p className={"mb--s"}>Vďaka zadanému emailu vám vytvoríme účet v klikem.cz a všetky zmeny vo Vašom webe ostanú zachované.</p>
            </ModalBody>

            <ModalFooter>
                <ModalButtonCancel handleClose={close}/>
                <ModalButtonSubmit label="Submit"/>
            </ModalFooter>
        </form>
    )
}