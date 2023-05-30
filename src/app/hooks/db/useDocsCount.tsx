// for getting the number of docs in a collection
// based on filters and count
import { auth, db } from 'Fire';
import React, { useEffect, useState } from 'react';
import { collection, getCountFromServer, getDocsFromServer, query, where, WhereFilterOp } from 'firebase/firestore'
import { userDB } from 'app/services/authServices';
interface Props {
    collectionRef: string,
    isUserDB?: boolean;
    filter?: {
        filterKey: string;
        filterValue: string | boolean;
        operator?: WhereFilterOp
    }
}

const useDocsCount = (props: Props)   => {
    const {collectionRef, isUserDB=true} = props
    const {filterKey, filterValue, operator='=='} = props.filter || {}
    const [count, setCount] = useState<number>(0)
    const user = auth.currentUser
    const getCount = async () => {
        let queryCollection = filterKey ?
            query(
                collection((isUserDB ? userDB() : db ) as any, collectionRef), 
                where(filterKey, operator, filterValue),
            )
            :
            query(
                collection((isUserDB ? userDB() : db ) as any, collectionRef)
            )
        const snapshot = await getCountFromServer(queryCollection)
        setCount(snapshot.data().count || 0)
    } 
    useEffect(()=> {
        if(user) {
            getCount()
        }
    }, [user, collectionRef, filterKey, filterValue])

    return count
};

export default useDocsCount;