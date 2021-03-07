import React from 'react'
import {Route} from "react-router-dom"
import {Layout} from 'antd'

import "./LayoutAdmin.scss"
import routes from '../config/Routes';



export default function LayoutAdmin(props) {
    
const {routes} = props;
const { Header, Footer, Sider, Content } = Layout;

    return (
        
    <Layout>
        <h2>Menu Sider</h2>
        
        <Layout>
            <Header>Header</Header>
            <Content>
                <LoadRouters routes={routes}/>
            </Content>
            <Footer>Mario Garcia</Footer>
        </Layout>
     
    </Layout>
         
    )
}






function LoadRouters(props){

    const {routes} = props;

    //hacemos un bucle para que recorra todas las rutas

    return routes.map((route,index)=>(
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component} //no hay ruitas hijas que pasarle
        />
    ))


}




