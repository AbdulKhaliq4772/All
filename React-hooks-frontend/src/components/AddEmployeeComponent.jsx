import React, { useEffect, useState } from "react"
import { useNavigate , useParams } from 'react-router-dom'
import EmployeeService from "../services/EmployeeService";

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate ();
    const {id} = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, emailId };
        EmployeeService.createEmployee(employee).then((response) => {
            console.log(response.data);
            navigate('/employees')
        }).catch(error => console.log(error));
    }

    useEffect(
        () => {
            EmployeeService.getEmployeeById(id).then((response)=>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmailId(response.data.setEmailId)
            }).catch(error => console.log(error))
        }
    , [])

    const title = () => {
        if(id){
            return <h2 className="text-center" >Update Employee</h2>
        } else {
            return <h2 className="text-center" >Add Employee</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form action="">
                                <div className="form-group mb-2">
                                    <label htmlFor="" className="form-label" >First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Enter First Name"
                                        className="form-control"
                                        value={firstName}
                                        onChange={
                                            (e) => { setFirstName(e.target.value) }
                                        }
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="" className="form-label" >First Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        className="form-control"
                                        value={lastName}
                                        onChange={
                                            (e) => { setLastName(e.target.value) }
                                        }
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="" className="form-label" >First Name</label>
                                    <input
                                        type="text"
                                        name="emailId"
                                        placeholder="Enter Email ID"
                                        className="form-control"
                                        value={emailId}
                                        onChange={
                                            (e) => { setEmailId(e.target.value) }
                                        }
                                    />
                                </div>
                                <button
                                    className="btn btn-success"
                                    onClick={e => saveEmployee(e)}
                                >
                                    Add Employee
                                </button>
                                <a href="/employees" className="btn btn-danger">cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent