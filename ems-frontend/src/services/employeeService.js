import axios from "axios";

const API_URL = "http://localhost:8080/employee";

export const getAllEmployees = () => axios.get(`${API_URL}/all`);

export const createEmployee = (employee) => axios.post(`${API_URL}/create`, employee);

export const getEmployee = (employeeId) => axios.get(API_URL+'/'+employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(API_URL+'/'+employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(API_URL+'/'+employeeId);