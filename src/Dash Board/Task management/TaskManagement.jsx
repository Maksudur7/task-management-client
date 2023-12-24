
import { IoIosArrowDown } from 'react-icons/io';
import { MdAdd } from 'react-icons/md';
import { useDrag, useDrop } from 'react-dnd'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import { useEffect } from 'react';
// import { useState } from 'react';
// task
const TaskManagement = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const addDataInfo = {
            taskTitle: data.taskTitle,
            decription: data.decription,
            startTime: data.startTime,
            endTime: data.endTime,
            assinTo: data.assinTo,
            status: data.status
        }

        console.log(addDataInfo)

        fetch('https://task-management-surver.vercel.app/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addDataInfo)
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


    useEffect(() => {
        fetch('https://task-management-surver.vercel.app/task')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    // const [BOX, SetBox] = useState([])
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'BOX',
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    const [{ canDrop, isOver }, drop] = useDrop(() => ({

        accept: 'BOX',
        // Props to collect
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))
    console.log('isDragging', isDragging, 'canDrop', canDrop, 'drop', drop)

    // const [{ isOver }, addToTeamRef] = useDrop({
    //     accept: "player",
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // });

    // const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    //     accept: "team",
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // });

    return (
        <div>
            <div>
                <div className="h-[90vh]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="rounded-l-full text-xl bg-sky-500"><IoIosArrowDown /></th>
                                <th className='border'><input className="border" type="search" /></th>
                                <th className='border'>Status</th>
                                <th className='border'>Assignee</th>
                                <th className='border'>Due Date</th>
                                <th className='border'>Tag</th>
                                <th className='border'>Link</th>
                                <th onClick={() => document.getElementById('my_modal_4').showModal()} className="rounded-r-full text-2xl bg-sky-500"><MdAdd /></th>
                            </tr>
                            <hr className="h-4" />
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr role="Handle" ref={drag} className="bg-base-200">
                                <th className="rounded-l-full ">1</th>
                                <td className='border'>Cy Ganderton</td>
                                <td className='border'><button className="btn btn-secondary">TO-DO</button></td>
                                <td className='border'><img className="h-12 w-12 rounded-full" src="https://i.ibb.co/cD2z7JQ/male-avatar-profile-picture-vector-10210618.jpg" alt="" /></td>
                                <th className='border'>1</th>
                                <td className='border'>Cy Ganderton</td>
                                <td className='border'>Quality Control Specialist</td>
                                <td className="rounded-r-full">Blue</td>
                            </tr>
                            <hr className="h-4" />

                        </tbody>
                    </table>
                </div>

            </div>
            <div className="grid grid-cols-3 h-20  ">
                <h1
                    ref={drop}
                    role={'Dustbin'}
                    style={{ backgroundColor: isOver ? 'red' : 'white' }}
                    className="w-full h-full flex justify-center items-center bg-secondary">
                    TO-DO
                    {canDrop ? 'Release to drop' : 'Drag a box here'}
                </h1>
                <h1 className="w-full h-full flex justify-center items-center bg-info">ONGOING</h1>
                <h1 className="w-full h-full flex justify-center items-center bg-warning">COMPLEATED</h1>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_4" className="h-[900px] w-[800px]">
                <div className=" mt-20 text-start ">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto w-[600px]">
                            <div className="relative z-0 w-full mb-5 group">
                                <input {...register("taskTitle")} type="text" name="taskTitle" id="taskTitle" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Task Tytle</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea {...register("decription")} id="decription" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" name="decription" cols="5" rows="10"></textarea>
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Task Descrip</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input {...register("startTime")} type="time" name="startTime" id="startTime" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Time</label>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input {...register("endTime")} type="time" name="endTime" id="endTime" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Time</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <select {...register("assinTo")} name="assinTo" id="assinTo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                        <option value="H">H</option>
                                        <option value="I">I</option>
                                        <option value="J">J</option>
                                    </select>
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Assign To</label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <select {...register("status")} name="status" id="status" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                        <option value="To-Do">To-Do</option>
                                        <option value="Ongoing">Ongoing</option>
                                        <option value="Compleate">Compleate</option>
                                    </select>
                                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
                                </div>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default TaskManagement;