import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import { MenuFoldOutlined,PoweroffOutlined, HomeOutlined } from "@ant-design/icons";
import logo from "../../../assets/img/png/BUNKAN_NICHIBOKU-02.png";
import './MenuTop.scss';
import {logout} from '../../../api/auth'

export default function MenuTop(props){

 const {menuCollapsed, setmenuCollapsed} = props;

const logOutUser = ()=>{
   logout();
   window.location.reload();
}


    return (
        <div className="menu-top">
            <div className="menu-top__left">
                    <Link to={"/admin"}>
                    <img 
                    className="menu-top__left-logo"
                    src={logo}
                    alt="BUNKAN NICHIBOKU"
                   
                 
                     />
                    </Link>
                

                    <Button type="link" onClick={() => setmenuCollapsed(!menuCollapsed)}>
                         {menuCollapsed ? < HomeOutlined /> : <MenuFoldOutlined />}
                    </Button>
            </div>

            <div className="menu-top__right">
                <Button type="link" onClick={logOutUser}>
                <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}