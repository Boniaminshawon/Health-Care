import { Link} from "react-router-dom";
import logo from '../assets/Images/logo dark.png'
import { GoArrowUpRight } from "react-icons/go";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>About Us</Link></li>
                   

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-medium">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>About Us</Link></li>
                    

                </ul>
            </div>
            <div className="navbar-end">
                <a className="flex items-center gap-1 border border-black rounded-xl text-xl font-medium py-2 px-3">Appointment <GoArrowUpRight /> </a>
            </div>
        </div>
    );
};

export default Navbar;