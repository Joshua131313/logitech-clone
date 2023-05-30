import React, { useContext, useState } from 'react'
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom'
import { auth } from 'Fire';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import AuthContainer from 'app/containers/AuthContainer/AuthContainer';
import { IAuthStates, IAuthStateSetter } from 'app/types/uiTypes/uiInterfaces';
import { createUserCollection, handleResendEmail } from 'app/services/authServices';
import { StoreContext } from 'StoreContext';

interface Props {

}

export const Register: React.FC<Props> = (props) => {
  const store = useContext(StoreContext)
  const navigate = useNavigate()
  const user = auth.currentUser
  const [resentLoading, setResentLoading] = useState(false)

  const handleRegister = (states: IAuthStates, setStates: IAuthStateSetter) => {
    const {name, email, password} = states
    const {setPasswordError, setEmailError, setLoading} = setStates
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      setLoading(true)
    })
    .catch((err)=>{
      switch(err.code) {
        case "auth/email-already-in-use":
          setEmailError(err.message)
         break
        case "auth/invalid-email":
          setEmailError(err.message)
        break
        case "auth/weak-password":
          setPasswordError(err.message)
        break
        default: 
          setEmailError(err.message)
        setTimeout(()=>{
          setEmailError('')
          setPasswordError('')
        }, 4000)
      }
    })
    onAuthStateChanged(auth, user => {
      if(user) {
          updateProfile(user, {
            displayName: name,
          })
          createUserCollection({
            email: email,
            name: name, 
            userid: user.uid,
            provider: 'Email'
          })
          handleResendEmail(()=> {

          })
          navigate('/email-verification')
        }
        else {
          store?.setUser(null)
      }
    })
  }

  return (
    <AuthContainer 
      isRegister
      title='Register'
      btnText1={{
        text: 'Already have an account?',
        link: '/',
      }}
      mainBtn={{
        text: 'Register',
        onClick: (states, setStates)=> {handleRegister(states, setStates)},
      }}
    />
  )
}