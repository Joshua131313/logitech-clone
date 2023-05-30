import React from 'react'

export interface Props {
    title: string;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalHeader = (props: Props) => {
    const {
        title,
        setModal
    } = props

    return (
        <div className={`modal-header flex-row sb ac`}>
            <h3>{title}</h3>
            <i 
                onClick={()=> setModal(false)}
                className='fal fa-times' 
            />
        </div>
    )
}

export default ModalHeader