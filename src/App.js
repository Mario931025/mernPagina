import React from 'react'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import routes from "./config/Routes"


function App() {


  return (
    <Router>
      <Switch>
       {routes.map((ruts,index)=>(
         <RouterWithSubRoutes key={index}{...ruts}/>
       ))}
      </Switch>

    </Router>
    
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
