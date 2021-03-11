import React, {useState} from 'react'
import {Redirect, Route,Switch} from "react-router-dom"
import {Layout} from 'antd';
import MenuTop from '../components/Admin/MenuTop'
import MenuSider from '../components/Admin/MenuSider'
import AdminSignIn from '../pages/Admin/SignIn/SignIn';

import "./LayoutAdmin.scss"
import routes from '../config/Routes';



export default function LayoutAdmin(props) {
    
const {routes} = props;
const [menuCollapsed, setmenuCollapsed] = useState(false);
const { Header, Footer, Sider, Content } = Layout;

const user = null;

if(!user){
    return(
        <>
             <Route path="/admin/login" component={AdminSignIn}/>
             <Redirect to ="/admin/login"/>
        </>
    ) 
    
   
}


    return (
        
    <Layout>
        
        <MenuSider menuCollapsed={menuCollapsed}/>

        
        <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
            <Header className="layout-admin__header">
                <MenuTop menuCollapsed={menuCollapsed} setmenuCollapsed={setmenuCollapsed}/>
            </Header>
            <Content  className="layout-admin__content">
                <LoadRoutes routes={routes}/>
            </Content>
            <Footer  className="layout-admin__footer">Mario Garcia</Footer>
        </Layout>
     
    </Layout>
         
    )
}






function LoadRoutes(props){

    const {routes} = props;

    return (

        <Switch>

      {routes.map((route,index)=>(
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component} //no hay ruitas hijas que pasarle
        /> ))}
        </Switch>

    );
}




