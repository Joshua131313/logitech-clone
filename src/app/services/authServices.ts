import { successToast, errorToast } from './../utils/toastsUtils';
import { IUser } from "app/types/dbTypes/dbInterfaces"
import { TProvider } from "app/types/dbTypes/dbTypes"
import { newTimestamp } from "app/utils/dateUtils"
import { auth, db } from "Fire"
import { browserLocalPersistence, browserSessionPersistence, FacebookAuthProvider, getAdditionalUserInfo, GoogleAuthProvider, sendEmailVerification, setPersistence, signInWithPopup, signOut } from "firebase/auth"
import { collection, doc, setDoc } from "firebase/firestore"

export const userDB = () => {
    let user = auth.currentUser
    return doc(collection(db, `users`), user?.uid)
  }
  export const createUserCollection = (
    props: {
        userid: string, 
        name: string,
        email: string, 
        profilePic?: string, 
        phoneNumber?: string, 
        provider: TProvider
    }
  ) => {
    const {
        email, 
        name, 
        provider, 
        userid, 
        phoneNumber, 
        profilePic
    } = props
    const userInfo : IUser = {
      created: newTimestamp(),
      uid: userid || '',
      name: name,
      phoneNumber: phoneNumber ?? '',
      email: email,
      profilePic: profilePic || '',
      provider,
      theme: 'default',
      darkMode: getUserDarkMode(),
      compact: 'default',
      address: '',
      city: '',
      companyName: '',
      country: '',
      postalCode: '',
      province: ''
    }
    return setDoc(userDB(), userInfo)
}
export const loginwithProvider = (provider: GoogleAuthProvider | FacebookAuthProvider) => {
    provider.addScope('email');
    signInWithPopup(auth, provider)
    .then((result)=>{
      let isNewUser = getAdditionalUserInfo(result)
      if(isNewUser) {
        const user = result?.user  
        if(user) {
          createUserCollection({
              email: user.email || '',
              name: user.displayName || '',
              provider: provider instanceof GoogleAuthProvider ? 'Google' : 'Facebook',
              userid: user.uid,
              phoneNumber: user.phoneNumber || '',
              profilePic: user.photoURL || '',
          })
        }
      }
    })
}
export const handleUpdateUserInfo = (
    updatedValue: Partial<IUser>
    ) => {
    const userID = auth.currentUser?.uid
    if(userID) {
        let collectionRef = collection(db, 'users')
        let docRef = doc(collectionRef, userID)
        setDoc(docRef, updatedValue, {merge: true})
    }
}
export const handleLogout = () =>{   
    signOut(auth).then(()=> {
        window.location.reload()
    })
}
export const handleResendEmail = (callback: ()=> void) => {
    const user = auth.currentUser
    const ActionCodeSettings = {
      url: `http://localhost:3000/?userID=${user?.uid}`,
    }
    user && sendEmailVerification(user, ActionCodeSettings).then(()=> {
      callback()
      successToast('Instructions resent to your email. Please check your junk.')
    })
    .catch(()=> {
      callback()
      errorToast()
    })
}
export const clearAuthState = (checked: boolean) : Promise<void> => {
  const persistence = checked ? browserLocalPersistence : browserSessionPersistence;
  return setPersistence(auth, persistence)
}
export const getUserDarkMode = () : boolean => {
  const matchPrefersLight = window.matchMedia('(prefers-color-scheme:light)');

  return matchPrefersLight.matches ? false : true
}  