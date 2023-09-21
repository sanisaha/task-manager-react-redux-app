import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Dashboard from "../layout/Dashboard/Dashboard";
import AddTask from "../pages/Dashboard/AddTask";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <Home />,
            },
            {
                path: "add-product",
                element: <AddTask></AddTask>,
            },
        ],
    },
]);

export default routes;