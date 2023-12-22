import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Auth provider/AuthProvider";


const Navbar = () => {
    const { users, logout } = useContext(AuthContex)
    console.log( 'users',users)
    const handelLogout = () => {
        logout()
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div >
            <div className="navbar bg-sky-300 shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={`/`}><a>Home</a></Link></li>
                            <li>
                                <Link to={`/dashboard`}><a>Dashbord</a></Link>
                            </li>
                            <li><Link to={`/login`}><a>Login</a></Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <div className="navbar-end">
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to={`/`}><a>Home</a></Link></li>
                            <li>
                                <Link to={`/dashboard`}><a>Dashbord</a></Link>
                            </li>
                            {
                                users ? <li onClick={handelLogout}><a>Log Out</a></li> : <li><Link to={`/login`}><a>Login</a></Link></li>
                            }
                        </ul>
                    </div>
                    {
                        users ? <img className="h-14 w-14 rounded-full mr-5" src={users.photoURL} alt="" /> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;