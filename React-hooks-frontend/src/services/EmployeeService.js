import axios from "axios";
import ListEmployeeComponent from "../components/ListEmployeeComponent";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId);
    }
}

export default new EmployeeService