import { Link, Outlet } from "react-router-dom";
import { GoTasklist } from 'react-icons/go';
import { FaCalendar } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';


const DashBoard = () => {

    return (
        <div className="mt-10 grid grid-cols-4 gap-10">
            <div className="col-span-1 min-h-screen bg-gradient-to-b from-cyan-400 to-blue-100 shadow rounded-box ">
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 ">
                    <li><Link to={`taskmanagement`}> <span className="text-2xl ml-5 text-white"><GoTasklist /></span> <a>Task Management </a></Link></li>
                    <li className="my-10">
                        <Link to={`attendance`}> <span className="text-2xl ml-5 text-white"><FaCalendar /></span> <a>Attendance</a></Link>
                    </li>
                    <li ><button> <span className="text-3xl ml-5 text-white"><CiLogout /></span> Log out</button> </li>
                </ul>
            </div>
            <div className="overflow-x-auto col-span-3 min-h-screen ">

                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default DashBoard;