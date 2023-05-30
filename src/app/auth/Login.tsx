import React, { useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { auth } from 'Fire'
import { signInWithEmailAndPassword } from 'firebase/auth'
import AuthContainer from 'app/containers/AuthContainer/AuthContainer'
import { IAuthStates, IAuthStateSetter } from 'app/types/uiTypes/uiInterfaces'
import { StoreContext } from 'StoreContext'

interface Props {

}

export const Login: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const {authListener} = useContext(StoreContext)
 
  const handleLogin = (states: IAuthStates, setStates: IAuthStateSetter) => {
    const {email, password} = states
    const {setEmailError, setPasswordError, setLoading} = setStates
    setEmailError('')
    setPasswordError('')
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((user)=>{
        if(user?.user?.emailVerified) {
          setLoading(false)
          authListener()
        }
        else {
          navigate('/email-verification')
        }
    })
    .catch(err => {
      switch(err.code) {
        case "auth/invalid-email":
          setEmailError(err.message)
        break
        case "auth/user/disabled":
        case "auth/user-not-found":
          setEmailError('Email does not exist')
        break
        case "auth/wrong-password":
          setPasswordError('Incorrect Password')
        break
        default: 
      } 
      setTimeout(()=>{
       setPasswordError('')
       setEmailError('')
      },4000) 
    })
  }
  
  return (
    <AuthContainer 
      isLogIn  
      btnText1={{
        text: 'Forgot password',
        link: '/forgot-password'
      }}
      btnText2={{
        text: "Don't have an account?",
        link: '/register'
      }}
      mainBtn={{
        text: 'Login',
        onClick: (states, setStates)=> handleLogin(states, setStates)
      }}
    />
  )
}