import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";


const Main = () => {
    return (
        <div>
            <Header />
            <Outlet/>
            
        </div>
    );
};

export default Main;