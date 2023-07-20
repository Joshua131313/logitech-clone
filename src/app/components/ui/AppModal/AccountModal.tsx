import React from 'react'
import AppButton from '../Buttons/AppButton'
import AppSwitch from '../Switches/AppSwitch'
import { User } from '../User/Me'
import AppModal from './AppModal'

export interface Props {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AccountModal = (props: Props) => {
    const {
        setShowModal,
        showModal
    } = props
    
    return (
        <AppModal
            modal={showModal}
            setModal={setShowModal}
            modalTitle='Account'
            className='account-modal'
        >
            <User 
                showEmail
            />
            <AppSwitch 
                text='Email notifications'
            />
            <span className='info'>
                Receive personalized product information, offers and tips via email.
            </span>
            <span className='info'>
                Learn more about our {' '}  
                <a target={'_blank'} href='https://www.logitech.com/en-ca/legal/product-privacy-policy.html'>
                    privacy policy.
                </a>
            </span>
            <a href='https://www.logitech.com/en-ca/my-account.html' target={'_blank'}>
                <AppButton
                    text='EDIT PROFILE'
                />
            </a>
            <AppButton 
                text='LOGOUT'
                variant='secondary'
            />
        </AppModal>
    )
}

export default AccountModal