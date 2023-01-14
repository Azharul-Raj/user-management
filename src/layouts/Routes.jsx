import { createBrowserRouter } from "react-router-dom";
import Details from "../pages/Main/Details";
import Main from "./Main";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element:<Details/>
            }
        ]
    }
])