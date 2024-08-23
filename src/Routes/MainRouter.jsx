import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import MainPage from "./../Pages/main";
import About from "./../Pages/About";
import Contactus from "./../Pages/Contactus";
import LoginCompo from "./../Pages/LoginCompo.jsx";
import HeaderCompo from "./../Components/HeaderFile";
import Slider from "./../Components/Slider";
// lazy(()=>import AdminRouter from "./../Module/Admin/AdminRoute.jsx";)
// lazy(() => { return import("./../Module/Admin/AdminRoute.jsx") })
const AdminRoute = lazy(() => import("./../Module/Admin/AdminRoute.jsx"))

// console.log(AdminRouter);

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <HeaderCompo />
                <Slider />
                <MainPage />
            </>
        ),
    }, {
        path: "/about",
        element: (
            <>
                <HeaderCompo />
                <About />
            </>
        ),
    }, {
        path: "/contact",
        element: (
            <>
                <HeaderCompo />
                <Contactus />
            </>
        ),
    }, {
        path: "/login",
        element: (
            <>
                <LoginCompo />
            </>
        ),
    }, {
        path: "/admin/*",
        element: (<Suspense fallback={<>Loading...</>} ><AdminRoute /></Suspense>),
         
        // children: [
        //     {
        //         // path: "/admin/dashboard",
        //         path: "dashboard",
        //         element: (
        //             <>
        //                 {/* <br /> */}
        //                 admin Dashboard
        //             </>
        //         ),
        //     }, {
        //         // path: "/admin/dashboard",
        //         path: "profile",
        //         element: (
        //             <>
        //             {/* <Link to="/admin/dashboard">Dashboard</Link> &nbsp; | &nbsp;<Link to="/admin/profile">Profile</Link> 
        //             <br /> */}
        //             admin Profile
        //             </>
        //         ),
        //     }
        // ]
    }
    // },{
    //     path: "/admin/dashboard",
    //     element: (
    //         <>
    //             Admin dashboard
    //         </>
    //     ),
    // }
])


export default MainRouter;