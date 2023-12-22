import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContex } from "../Auth provider/AuthProvider";
import Swal from "sweetalert2";

const Regster = () => {
    const location = useLocation()
    const Navigate = useNavigate()
    const { Regester } = useContext(AuthContex)
    const {
        register,
        handleSubmit,

        // formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        Regester(data.email, data.password)
            .then(res => {
                console.log(res)
                Navigate(location?.state ? location?.state : '/')
                console.log(res)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })
        // updatePhoto(data.neme) //imagebb photo to-do
        //     .then(result => {
        //         console.log(result)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        console.log(data, data.name, data.email, data.password)
        const userinfo = {
            name: data.user.displayName,
            email: data.user.email,
            image: data.photoURL
        }
        fetch(' http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userinfo)
        })
            .then(res => {
                console.log(res)

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Send Your Requst",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <div className="p-10">
                <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block font-semibold" >Name</label>
                            <input {...register("name")} className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="name" type="text" name="name" required="required" />
                        </div>

                        <div className="mt-4">
                            <label className="block font-semibold" >Email</label>
                            <input {...register("email")} className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="email" type="email" name="email" required="required" />
                        </div>
                        <div className="mt-4">
                            <label className="block font-semibold" >Chose Photo</label>
                            <input className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="photo" type="file" name="photo" required="required" />
                        </div>
                        <div className="mt-4">
                            <label className="block font-semibold" >Password</label>
                            <input {...register("password")} className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full" id="password" type="password" name="password" required="required" />
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <button type="submit" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Register</button>
                            <a className="font-semibold">
                                Already registered? <Link to={`/login`}><span className="font-bold text-blue-600">Login</span></Link>
                            </a>
                        </div>

                    </form>

                    <aside className="">
                        <div className="bg-gray-100 p-8 rounded">
                            <h2 className="font-bold text-2xl">Instructions</h2>
                            <ul className="list-disc mt-4 list-inside">
                                <li>All users must provide a valid email address and password to create an account.</li>
                                <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information</li>
                                <li>Users must not create multiple accounts for the same person.</li>
                            </ul>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default Regster;