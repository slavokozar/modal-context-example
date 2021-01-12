import React, {useState} from 'react';

export const ModalContext = React.createContext({
    modals: []
});

export const ModalContextProvider = ({children}) => {
    const [modals, setModals] = useState([]);

    const modalOpen = (modal) => {
        setModals(
            modals => modals.concat(Object.assign(
                {
                    id: [...Array(10)].map(i => (~~(Math.random() * 36)).toString(36)).join(''),
                    status: null,
                    size: 'medium',
                    closeButton: true,
                },
                modal
            ))
        );
    };

    const modalClose = (modal) => {
        setModals(
            modals => modals.filter((m) => (
                modal.id !== m.id
            ))
        );
    };

    return (
        <ModalContext.Provider value={{modals, modalOpen, modalClose}}>
            {children}
        </ModalContext.Provider>
    )
}