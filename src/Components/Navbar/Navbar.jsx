
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks =
        <>
            <NavLink  to={'/home'}>Home</NavLink>
            <p>-</p>
            <NavLink to={'/services'}>Our Services</NavLink>
            <p>-</p>
            <NavLink to={'/health-check'}>Health Check</NavLink>
            <p>-</p>
            <NavLink to={'/appointment'}>Appointment</NavLink>
            <p>-</p>
            <NavLink to={'/about'}>About Us</NavLink>
            <p>-</p>
            <NavLink to={'./location'}>Locations</NavLink>
        </>
    return (
        <div className="navbar text-black flex justify-between w-full ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Ma General Hospital</a>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-3">
                    {navLinks}
                </ul>
            </div>
          
        </div>
    );
};

export default Navbar;