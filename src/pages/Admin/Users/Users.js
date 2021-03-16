import React,{useState,useEffect} from 'react';
import {getAccessToken} from '../../../api/auth';
import {getUsersActiveApi} from '../../../api/user';
import ListUsers from "../../../components/Admin/Users/ListUsers"

import "./users.scss"

export default function Users(){

    const [userActive, setuserActive] = useState([]);
    const [userInactive, setuserInactive] = useState([]);
    const token = getAccessToken()


    useEffect(() => {
        
       getUsersActiveApi(token,true).then(response => {
           setuserActive(response);
        })
    }, [token])

    useEffect(() => {
        
        getUsersActiveApi(token,false).then(response => {
            setuserInactive(response);
         })
     }, [token])
 


    return(
        <div className="users">
            <ListUsers userActive={userActive} userInactive={userInactive}/>
        </div>
    )
}
