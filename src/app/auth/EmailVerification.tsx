import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth } from 'Fire';
import { toast } from 'react-toastify';
import AuthContainer from 'app/containers/AuthContainer/AuthContainer';
import { handleResendEmail } from 'app/services/authServices';


interface Props {

}
export const EmailVerification: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const user = auth.currentUser
  const [resentLoading, setResentLoading] = useState(false)


  const [state,setState] = useState(0)

  function Interval() {
      setTimeout(()=>{
        user?.reload()
        if(user?.emailVerified) {
          toast('Email successfully verified', {type: 'success', autoClose: false})
          navigate('/')
        }
         setState(state+1)
       }, 3000)
  }
   useEffect(()=>{
     Interval()
    }, [state])


  return (
    <AuthContainer 
      isEmailVerification
      title='Email Verification' 
      msg='Email verification sent to your email. Please verify and confirm your account. Check your junkmail.'
      backBtn
      mainBtnLoading={resentLoading}
      mainBtn={{
        text: 'Resend email',
        onClick: (states, setStates)=>  {
          setResentLoading(true)
          handleResendEmail(()=> {
            setResentLoading(false)
          })
        }
      }}
    />
  )
}