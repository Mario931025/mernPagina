import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

//admin pages
import AdminHome from '../pages/Admin'
import SignIn from '../pages/Admin/SignIn'


//pages
import Home from '../pages/Home';
import Contact from '../pages/Contact'



const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes:[
            {
                path:"/admin",
                component: AdminHome,
                exact: true
            },
            {
                path:"/admin/login",
                component: SignIn,
                exact: true
            }
        ]
    },
    {
        path:"/",  
        component: LayoutBasic,
        exact:false, //por que puede ir /courses,/posts/,/contact
        routes:[

            {
            path:"/",
            component: Home,
            exact: true
            },
            {
            path:"/contact",
            component: Contact,
            exact: true
            }
            
        ]
    }
]

export default routes;
