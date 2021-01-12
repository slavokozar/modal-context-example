import React from 'react';
import {useTranslation} from "react-i18next";
import ModalButtonAction from "./ModalButtonAction";

export default function ModalButtonDelete({heading, handleClick}) {
    const {t} = useTranslation();

    return (
        <ModalButtonAction label={t('delete')} handleClick={handleClick}/>
    )
}