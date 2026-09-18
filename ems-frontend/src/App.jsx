import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeTable from "./components/EmployeeTable";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<EmployeeTable />}></Route>
                    <Route path='/employees' element={<EmployeeTable/>}></Route>
                    <Route path='/add-employee' element={<AddEmployee/>}></Route>
                    <Route path='/edit-employee/:id' element={<AddEmployee/>}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;