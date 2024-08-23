import { Outlet, useRoutes } from "react-router-dom"



const AdminRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <>Welcome Admin<Outlet/></>,
            children: [
                {
                    path: "profile",
                    element: <>Profile Data</>,
                },
                {
                    path: "dashboard",
                    element: <>Profile Data</>,
                }
            ]
        }])
    return routes
}
export default AdminRoute;