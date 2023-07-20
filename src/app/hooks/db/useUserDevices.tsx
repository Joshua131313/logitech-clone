import React, { useEffect, useState } from 'react'

import {IMouse} from 'app/types/dbTypes/dbInterfaces'
import { userDB } from 'app/services/authServices';
import { getDocs, where, WhereFilterOp, limit as Limit, onSnapshot } from 'firebase/firestore';
import { collection, query } from 'firebase/firestore';
import { auth } from 'Fire';

interface Props {
    limit?: number;
    filter?: {
        filterKey: string;
        filterValue: string | boolean;
        operator?: WhereFilterOp 
    }
}

const useUserDevices = (props: Props) : [IMouse[], boolean] => {
    const {
        filter,
        limit = 10
    } = props
    const [loading, setLoading] = useState(false)
    const [userDevices, setUserDevices] = useState<IMouse[]>([])
    let user = auth.currentUser

    useEffect(()=> { 
        let constraints = []
        if(filter) constraints.push(where(filter.filterKey, filter.operator || '==', filter.filterValue))
        setLoading(true)
        let queryCollection = query(
            collection(userDB(), 'devices'),
            ...constraints,
            Limit(limit)
        )
        onSnapshot(queryCollection, (snap: any) => {
            let devices : IMouse[] = snap.docs.map((doc: any)=> {
               return doc.data()
            })
            setUserDevices(devices)
        })
    }, [limit, user, filter])

    return [userDevices, loading]
};

export default useUserDevices