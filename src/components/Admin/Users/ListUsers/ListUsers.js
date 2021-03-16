import React,{useState} from 'react';
import {Switch,List,Avatar,Button} from 'antd'
import { } from "@ant-design/icons";
import noAvatar from '../../../../assets/img/png/no-avatar.png';

import './ListUsers.scss'

export default function ListUsers(props){

    
   const {userActive,userInactive} = props;
   const [viewUsersActives, setviewUsersActives] =  useState(true)

    

    return (
        <div className="list-users">
            <div className="list-users__switch">
                <Switch
                    defaultChecked
                    onChange={()=> setviewUsersActives(!viewUsersActives) }
                />
                <span>
                    {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                </span>
            </div>
            {viewUsersActives ? <UserActive/> : <UserInactive/>}
        </div>
    )
}


function UserActive(){
    return <h3>Usuarios Activos</h3>
}

function UserInactive(){
    return <h3>usuarios Inactivos</h3>
}
