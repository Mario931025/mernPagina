import React from 'react'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import routes from "./config/Routes";
import AuthProvider from './providers/AuthProvider'

import './App.scss'

function App() {


  return (

    <AuthProvider>
       <Router>
      <Switch>
       {routes.map((ruts,index)=>(
         <RouterWithSubRoutes key={index}{...ruts}/>
       ))}
      </Switch>

    </Router>
    </AuthProvider>
   
    
  );
}


//de ruta padre pasa info a rutas hojas 
//como es componente con mayusculas
function RouterWithSubRoutes(route){
  
return (
  <Route
    path={route.path}
    exact={route.exact}
    render ={props => <route.component routes={route.routes} {...props}/> }
  />
)

}

export default App;
