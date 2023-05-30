import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import '../containers/AuthContainer/AuthContainer.css'
import { ResetPassword } from './recovery/ResetPassword';
import RecoverEmail from './recovery/RecoverEmail';
import { VerifyEmail } from './recovery/VerifyEmail';

interface Props {

}

const UserManagement: React.FC<Props> = props => {

    const [searchParams, setSearchParams] = useSearchParams()
    const mode = searchParams.get('mode')
    const oobCode = searchParams.get('oobCode')
    const continueUrl = searchParams.get('continueUrl')
    const EmptySlot = () => {
        return (
            <div>Invalid URL, please double check your email for the correct link.</div>
        )
    }
    let El = mode === 'resetPassword' ? 
            ResetPassword 
            :
            mode === 'recoverEmail' ?
            RecoverEmail
            :
            mode === 'verifyEmail' ?
            VerifyEmail
            :
            EmptySlot

    return (
      <El oobCode={oobCode || ''} continueUrl={continueUrl || ''}/>
    );
};


export default UserManagement;