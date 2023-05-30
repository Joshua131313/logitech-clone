import { userDB } from 'app/services/authServices';
import { INotification } from 'app/types/dbTypes/dbInterfaces';
import { auth, db } from 'Fire';
import { collection, query, limit as fLimit, onSnapshot, orderBy, WhereFilterOp, where } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';

interface Props {
    limit?: number;
    filter?: {
        filterKey: string;
        filterValue: string | boolean;
        operator?: WhereFilterOp 
    }
}

const useNotifications = (props: Props) : INotification[] => {
    const {limit = 10, filter} = props
    const [loaded, setLoaded] = useState(false)
    const [notifications, setNotifications] = useState<INotification[]>([])
    let user = auth.currentUser
    useEffect(()=> {
        let constraints = []
        if(filter) constraints.push(where(filter.filterKey, filter.operator || '==', filter.filterValue))
        let queryCollection = query(
            collection(userDB(), 'notifications'),
            orderBy('dateCreated', 'desc'),
            ...constraints,
            fLimit(limit)
        )
        onSnapshot(queryCollection, (snap: any)=> {
            let notifications : INotification[] = snap.docs.map((doc: any)=> doc.data())
            setNotifications(notifications)
        })
    }, [limit, user, filter])


    return notifications
}

export default useNotifications