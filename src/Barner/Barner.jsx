import { Link } from "react-router-dom";

const Barner = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2  max-h-min">
                <div className="text-start mt-10">
                    <h1 className="text-8xl font-extralight">
                        <span className=" text-sky-500">FREE</span> <br />
                        ONLINE TASK MANAGER
                    </h1>
                    <p className="mt-5 text-xl w-[80%]">Organize and manage your team like a boss with Bitrix24, a free task management tool packing more capabilities than you can imagine.</p>
                    <Link to={`/dashboard`}><button className="btn bg-sky-400 rounded-full mt-10 shadow-2xl text-2xl">Let`s Explore</button>
                    </Link>
                </div>
                <div className=" lg:inline hidden">
                    <div className=" bg-gradient-to-b from-cyan-400 to-blue-100 w-[400px] h-full ml-10 rounded-b-full flex justify-center items-center ">
                        <img className="w-[460px] rounded-bl-badge mb-20 ml-5" src="https://i.ibb.co/2WPp1Gt/original-15b771cad449b88584140465f5c7eb12.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Barner;