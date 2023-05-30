import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from 'Fire';
import { confirmPasswordReset, sendEmailVerification, updatePassword, verifyPasswordResetCode } from 'firebase/auth';
import { toast } from 'react-toastify';
import AuthContainer from 'app/containers/AuthContainer/AuthContainer';

interface Props {
  oobCode: string
}

export const ResetPassword: React.FC<Props> = (props) => {
  const {oobCode} = props
  const navigate = useNavigate()
  const location = useLocation()
  const user = auth.currentUser
  const handleResetPassword = (states: {password: string}) => {
    verifyPasswordResetCode(auth, oobCode).then((email)=> {
      confirmPasswordReset(auth, oobCode, states.password).then(resp=> {
        toast('Password reset successfully', {type: 'success'})
        navigate('/')
      })
      .catch(()=> {
        console.log('first err')
        toast('An error has occured.', {type: 'error'})
      })
    })
    .catch(()=> {
      toast('Try to reset your password again.', {type: 'error'})
    })
  }

  const [state,setState]=useState(0)

  function Interval() {
      setTimeout(()=>{
        user?.reload()
        if(user?.emailVerified) {
          
        }
         setState(state+1)
       }, 5000)
  }
   useEffect(()=>{
     Interval()
    }, [state])

  // useEffect(()=> {
  //   if(user && user.emailVerified) {
  //   }
  // }, [user])

  return (
    <AuthContainer 
      isResetPassword
      title='Reset Password' 
      backBtn
      mainBtn={{
        text: 'Reset password',
        onClick: (states: {password: string})=>  handleResetPassword(states)
      }}
    />
  )
}