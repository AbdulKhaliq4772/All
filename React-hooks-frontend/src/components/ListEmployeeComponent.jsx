import React, { useEffect, useState } from "react"
import EmployeeService from "../services/EmployeeService";


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {

        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>
            console.log(error)
    )

}, [])

return (
    <div className="container">
        <h2 className="text-center">List of Employess</h2>
        {/* <link to = "/add-employee" className="btn btn-primary mb-2"> Add Employee </link> */}
        <a href = "/add-employee" className="btn btn-primary mb-2" >Add Employee</a>
        {/* <button to = "/add-employee" className="btn btn-primary mb-2" >Add Employee</button> */}
        <table className="table table-bordered table-stripped">
            <thead className="">
                <th>Empolyee ID</th>
                <th>Empolyee First Name</th>
                <th>Empolyee Last Name</th>
                <th>Empolyee Email</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <a href='/edit-employee/${employee.id}' className="btn btn-info" >update</a>
                                </td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    </div>
)
}

export default ListEmployeeComponent