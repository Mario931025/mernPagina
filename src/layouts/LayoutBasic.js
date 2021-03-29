import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Layout,Row,Col} from 'antd'
import MenuTop from '../components/Web/MenuTop'
import Footer from '../components/Web/Footer'

import './LayoutBasic.scss';



export default function LayoutBasic(props) {
       //los props contienen todo el sistema de rutas de route.js
   
    const {routes} = props;
 

    return(
        <>
        <Row>
            <Col lg={4}/>
            <Col lg={16}>
            <MenuTop/>
          
            </Col>
            <Col lg={4}/>
        </Row>
          <LoadRouters routes={routes}/>
          <Footer/>
        </>
    )

}




function LoadRouters({routes}){

  
    return (
    <Switch>

   {
    routes.map((route,index)=>(

    <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component} //no hay ruitas hijas que pasarle
    />
    ))
   }
    </Switch>
    )
}


