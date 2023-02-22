import { Route, Routes } from 'react-router-dom';

import ViewTeacher from "../Pages/Office/viewTeacher";
import AddTeacher from "../Pages/Office/AddTeacher";
import Login from '../Pages/Office/Login';
import OfficeHome from "../Pages/Office/Home";
import EachTeacher from "../Pages/Office/EachTeacher";
import ViewStudent from "../Pages/Office/ViewStudent";
import AddStudent from "../Pages/Office/AddStudent";
import ViewBatch from "../Pages/Office/ViewBatch";
import AddBatach from "../Pages/Office/AddBatach";
import EachBatch from "../Pages/Office/EachBatch";
import EditBatch from "../Pages/Office/EditBatch";
import AdminVerification from "../Varification/AdminVerification";
import EachStudent from '../Pages/Office/EachStudent';

const OfficeRoutes = () => (

    <Routes>

        <Route path="/" element={<Login />} ></Route>

        <Route path="/home" element={<OfficeHome />} ></Route>

        <Route path="/add-teacher" element={<AddTeacher />} ></Route>

        <Route path="/teachers" element={<ViewTeacher />} ></Route>

        <Route path="/each-teacher" element={<EachTeacher />} ></Route>

        <Route path="/students" element={<ViewStudent />} ></Route>

        <Route path="/add-student" element={<AddStudent />} ></Route>

        <Route path="/batches" element={<ViewBatch />} ></Route>

        <Route path="/add-batch" element={<AddBatach />} ></Route>

        <Route path="/each-batch" element={<EachBatch />} ></Route>

        <Route path="/edit-batch" element={<EditBatch />} ></Route>

        <Route path="/each-student" element={<EachStudent />} ></Route>


    </Routes>
);

export default OfficeRoutes;