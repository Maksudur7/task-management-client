

const Attendance = () => {
    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className=" bg-sky-500">
                        <th className="rounded-l-full">V</th>
                        <th><input className="border" type="search" /></th>
                        <th>Status</th>
                        <th>Assignee</th>
                        <th>Due Date</th>
                        <th>Tag</th>
                        <th>Link</th>
                        <th className="rounded-r-full">+</th>
                    </tr>
                    <hr className="h-4" />
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                        <th className="rounded-l-full">1</th>
                        <td>Cy Ganderton</td>
                        <td><button className="btn btn-secondary">TO-DO</button></td>
                        <td><img className="h-12 w-12 rounded-full" src="https://i.ibb.co/cD2z7JQ/male-avatar-profile-picture-vector-10210618.jpg" alt="" /></td>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td className="rounded-r-full">Blue</td>
                    </tr>
                    <hr className="h-4" />

                </tbody>
            </table>
        </div>
    );
};

export default Attendance;