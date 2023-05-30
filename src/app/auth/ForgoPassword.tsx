import React from 'react'
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from 'Fire';
import { IAuthStates, IAuthStateSetter } from 'app/types/uiTypes/uiInterfaces';
import AuthContainer from 'app/containers/AuthContainer/AuthContainer';

interface Props {
  
}

export const ForgotPassword: React.FC<Props> = (props) => {

  const handleSendEmail = (states: IAuthStates, setStates: IAuthStateSetter) => {
    const {email} = states
    sendPasswordResetEmail(auth, email).then(()=> {
      alert('Reset email sent!')
    })
    .catch((error)=> {
      alert('Account does not exist!')
    })
  }

  return (
    <AuthContainer 
      isForgotPassword
      title='Forgot password' 
      backBtn
      mainBtn={{
        text: 'Send email',
        onClick: (states, setStates)=>  handleSendEmail(states, setStates)
      }}
    />
  )
}