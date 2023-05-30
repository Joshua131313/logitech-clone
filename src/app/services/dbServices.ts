import { userDB } from './authServices';
import { auth, db } from "Fire"
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore"
import { newTimestamp } from 'app/utils/dateUtils';
import { IDefaultDocData } from 'app/types/dbTypes/dbInterfaces';
// Raandom ID
export const generateID = () => {
    return doc(collection(db, 'users')).id
}
export const setUserDoc  = (props: {
    path: string;
    value: object;
    merge?: boolean    
}) : Promise<void> => {
    const { path, value, merge=true } = props
        const collectionRef = collection(userDB(), path)
        const docID = generateID()
        const docRef = doc(collectionRef, docID)
        const defaultData : IDefaultDocData = {
            docID,
            date: newTimestamp(),
            createdBy: auth.currentUser!.uid
        }
        return setDoc(docRef, {
            ...value,
            ...defaultData
        })  
}
export const deleteUserDoc = (props: {
    path: string;
    docID: string;
}) : Promise<void> => {
    const { docID, path } = props
    const collectionRef = collection(userDB(), path)
    const docRef = doc(collectionRef, docID)
    return deleteDoc(docRef)
}
