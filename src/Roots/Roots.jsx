import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Roots = () => {
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;