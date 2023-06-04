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
            <h4>{title}</h4>
            <i 
                onClick={()=> setModal(false)}
                className='fal fa-times' 
            />
        </div>
    )
}

export default ModalHeader