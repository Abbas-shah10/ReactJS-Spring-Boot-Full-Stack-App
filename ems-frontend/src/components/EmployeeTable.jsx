import { useEffect, useState } from "react";
import { deleteEmployee, getAllEmployees } from "../services/employeeService";
import { useNavigate } from "react-router-dom";

function EmployeeTable() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigator = useNavigate();

    useEffect(() => {
        getEmployees();
    }, []);

    function getEmployees() {
        getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error(error);
                setError("Failed to load employees");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id) {

        if (window.confirm("Are you sure you want to delete this employee?")) {

            deleteEmployee(id)
                .then((response) => {
                    console.log("Employee deleted with id " + id);
                    getEmployees();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary"></div>
                <p className="mt-2">Loading employees...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center">
                    {error}
                </div>
            </div>
        );
    }

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">

                    <h3 className="mb-0">
                        Employee List
                    </h3>

                    <button
                        className="btn btn-success"
                        onClick={() => navigator("/add-employee")}
                    >
                        Add Employee
                    </button>

                </div>

                <div className="card-body">

                    {employees.length === 0 ? (

                        <div className="alert alert-info text-center mb-0">
                            No employees found.
                        </div>

                    ) : (

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover table-striped align-middle mb-0">

                                <thead className="table-dark">

                                    <tr>
                                        <th>ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th className="text-center">Action</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {employees.map((employee) => (

                                        <tr key={employee.id}>

                                            <td>{employee.id}</td>

                                            <td>{employee.firstName}</td>

                                            <td>{employee.lastName}</td>

                                            <td>{employee.email}</td>

                                            <td className="text-center">

                                                <button
                                                    className="btn btn-info btn-sm me-2"
                                                    onClick={() => updateEmployee(employee.id)}
                                                >
                                                    Update
                                                </button>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => removeEmployee(employee.id)}
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default EmployeeTable;