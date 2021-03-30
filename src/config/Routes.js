import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

//admin pages
import AdminHome from '../pages/Admin'
import SignIn from '../pages/Admin/SignIn/SignIn'
import AdminUsers from '../pages/Admin/Users';
import MenuWeb from '../pages/Admin/MenuWeb';
import AdminCourses from '../pages/Admin/Courses'



//pages
import Home from '../pages/Home';
import Contact from '../pages/Contact'
import Courses from '../pages/Courses'
import Error404 from '../pages/Error404';


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
            },
            {
                path:"/admin/users",
                component: AdminUsers,
                exact: true
            },
            {
                path:"/admin/menu",
                component: MenuWeb,
                exact: true
            },
            {
                path:"/admin/courses",
                component: AdminCourses,
                exact: true
            },
            {
                
                component: Error404
                
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
            },
            ,
            {
            path:"/courses",
            component: Courses,
            exact: true
            }
            ,
            {
                
                component: Error404
                
            }
            
        ]
    }
]

export default routes;
