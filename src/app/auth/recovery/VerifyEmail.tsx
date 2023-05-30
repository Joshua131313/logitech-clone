import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth } from 'Fire';
import { applyActionCode } from 'firebase/auth';
import { toast } from 'react-toastify';
import AuthContainer from 'app/containers/AuthContainer/AuthContainer';

interface Props {
  oobCode: string,
  continueUrl: string
}

export const VerifyEmail: React.FC<Props> = (props) => {
  const {oobCode, continueUrl} = props
  const navigate = useNavigate()
  const location = useLocation()
  const user = auth.currentUser
  const userId = continueUrl.split('userID=')[1]

  const handleVerifyEmail = () => {
    if(!oobCode) {
        return alert('Invalid action code. Please make sure your email link is valid.')
    }
    applyActionCode(auth, oobCode)
        .then((val) => {
            toast('Email verified!', {type: 'success'})
            navigate('/')
            // createUserCollection(user.uid, user.displayName, user.email)
        })
        .catch((error) => {
            console.log(error)
            alert('The link is invalid or has expired. Please verify your email again.')
        })
  }
  useEffect(()=> {
    if(typeof user === 'object') {
        if((!user?.emailVerified)) {
            handleVerifyEmail()
        }
    }
  }, [user])
  return (
    <AuthContainer 
      isEmailVerification
      title='Email Verification' 
      msg='Your email should be verified shortly, if you are not redirected, click on the button below.'
      mainBtn={{
        text: 'Not redirected? Click here.',
        onClick: ()=>  handleVerifyEmail()
      }}
    />
  )
}