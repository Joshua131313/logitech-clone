import { TNotificationType } from './../types/dbTypes/dbTypes';
import { INotification } from 'app/types/dbTypes/dbInterfaces';
import { newTimestamp } from 'app/utils/dateUtils';
import { auth, db } from 'Fire';
import { collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore"
import { userDB } from "./authServices"
import { generateID } from "./dbServices"

export const createNotification = (params: {
    text: string, 
    title: string, 
    type: TNotificationType
  }) => {
    let notificationID = generateID()
    let notificationCollection = collection(userDB(), 'notifications')
    let notificationDoc = doc(notificationCollection, notificationID)
    let notificationData: INotification = {
      ...params,
      dateCreated: newTimestamp(),
      seen: false,
      notificationID,
    }

    return setDoc(notificationDoc, notificationData)
}
export const markNotiAsRead = (notificationID: string) => {
  const user = auth.currentUser
  if(user) {
    let collectionRef = collection(userDB(), 'notifications')
    let docRef = doc(collectionRef, notificationID)
    return updateDoc(docRef, {isRead: true})
  }
  // return userDB().collection('notifications').doc(notificationID).update({
  //   isRead: true
  // })
}
export const deleteNoti = (notificationID: string) => {
  const user = auth.currentUser
  if(user) {
    let collectionRef = collection(userDB(), 'notifications')
    let docRef = doc(collectionRef, notificationID)
    return deleteDoc(docRef)
  }
}