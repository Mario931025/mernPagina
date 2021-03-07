import React from 'react'
import {Route} from 'react-router-dom'
import {Layout} from 'antd'

import './LayoutBasic.scss';



export default function LayoutBasic(props) {
       //los props contienen todo el sistema de rutas de route.js
   
    const {routes} = props;
    const {Content,Footer} = Layout;


    return (
    <Layout>
        <h2>Menu...</h2>
        <Layout>
            <Content>
                <LoadRouters routes={routes}/>
            </Content>

            <Footer>
                Mario Garcia Angeles
            </Footer>
        </Layout>
     
    </Layout>
    )
}




function LoadRouters({routes}){

  
    return routes.map((route,index)=>(

        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component} //no hay ruitas hijas que pasarle
        />
    ))
}


