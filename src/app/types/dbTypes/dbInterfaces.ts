import { Timestamp } from 'firebase/firestore';
import { TCompact, TTheme, TProvider, TNotificationType } from './dbTypes';
export interface IDefaultDocData {
    createdBy: string;
    date: Timestamp;
    docID: string;
}
export interface IUser  {
    created: Timestamp,
    uid: string,
    name: string,
    phoneNumber: string,
    email: string;
    profilePic: string,
    provider: TProvider,
    theme: TTheme,
    darkMode: boolean,
    compact:  TCompact;
    address: string;
    postalCode: string;
    country: string;
    province: string;
    city: string;
    companyName: string;
}
export interface INotification  {
    dateCreated: Timestamp,
    seen: boolean,
    notificationID: string,
    text: string,
    title: string,
    type: TNotificationType
}
export interface IUploadedFile {
    downloadURL: string;
    fileType: string;
    fileID: string;
    uploadedBy: string;
    fileInfo: {
      size: number; 
      name: string;
      lastModified: number;
    },
    disposition?: string;
    content?: string;
}