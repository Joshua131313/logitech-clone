import React from 'react'
import './AppModal.css'
import ModalHeader from './ModalHeader';

export interface Props extends React.ComponentPropsWithoutRef<"div"> {
    children: React.ReactNode;
    modalTitle?: string;
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}

const AppModal = (props: Props) => {
    const {
        modalTitle,
        modal, 
        setModal,
        className,
        ...rest
    } = props

    return (
        <>
            {modal && <div className='modal-screen' />}
            {modal && 
            <div className={`app-modal ${className}`} {...rest}>
                {
                    modalTitle &&
                    <ModalHeader 
                        title={modalTitle}
                        setModal={setModal}
                    />
                }
                <div className="modal-details">
                    {props.children}
                </div>
            </div>
            }
        </>
    )
}

export default AppModal