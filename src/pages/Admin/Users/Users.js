import React,{useState,useEffect} from 'react';
import {getAccessToken} from '../../../api/auth';
import {getUsersActiveApi} from '../../../api/user';
import ListUsers from "../../../components/Admin/Users/ListUsers"

import "./users.scss"

export default function Users(){

    const [usersActive, setusersActive] = useState([]);
    const [usersInactive, setusersInactive] = useState([]);
    const [reloadUsers,setRealoadUsers] = useState(false);
    const token = getAccessToken()



    useEffect(() => {
        
       getUsersActiveApi(token,true).then(response => {
        
           setusersActive(response.users);
         })

        
        getUsersActiveApi(token,false).then(response => {
            setusersInactive(response.users);
         })

         setRealoadUsers(false);
     }, [token,reloadUsers])
 


    return(
        <div className="users">
            <ListUsers usersActive={usersActive} usersInactive={usersInactive} setRealoadUsers={setRealoadUsers}/>
        </div>
    )
}
