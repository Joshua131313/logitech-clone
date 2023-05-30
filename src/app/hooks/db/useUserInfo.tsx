import { userDB } from 'app/services/authServices';
import { IUser } from 'app/types/dbTypes/dbInterfaces';
import { auth } from 'Fire';
import { onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

interface Props {
    userID?: string
}

const useUserInfo = (props: Props) : IUser | null => {
    const {userID = auth.currentUser?.uid} = props
    const [userInfo, setUserInfo] = useState<IUser | null>(null)
    const user = auth.currentUser
    useEffect(()=> {
       user && onSnapshot(userDB(), (querySnapshot: any)=> {
            let userData = querySnapshot.data()
            setUserInfo(userData)
        })
    },  [userID, user])


    return userInfo
}

export default useUserInfo