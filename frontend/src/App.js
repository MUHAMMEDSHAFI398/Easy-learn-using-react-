import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ViewTeacher from "./Pages/Office/viewTeacher";
import AddTeacher from "./Pages/Office/AddTeacher";
import Login from './Pages/Office/Login';
import OfficeHome from "./Pages/Office/OfficHome";
import EachTeacher from "./Pages/Office/EachTeacher";
import ViewStudent from "./Pages/Office/ViewStudent";
import AddStudent from "./Pages/Office/AddStudent";
import ViewBatch from "./Pages/Office/ViewBatch";
import AddBatach from "./Pages/Office/AddBatach";
import EachBatch from "./Pages/Office/EachBatch";
import EditBatch from "./Pages/Office/EditBatch";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/office" element={<Login/> } ></Route>
          <Route exact path="/office/home" element={<OfficeHome/>} ></Route>
          <Route exact path="/office/add-teacher" element={<AddTeacher/>} ></Route>
          <Route exact path="/office/teachers" element={<ViewTeacher/>} ></Route>
          <Route exact path="/office/each-teacher" element={<EachTeacher/>} ></Route>
          <Route exact path="/office/view-students" element={<ViewStudent/>} ></Route>
          <Route exact path="/office/add-student" element={<AddStudent/>} ></Route>
          <Route exact path="/office/batches" element={<ViewBatch/>} ></Route>
          <Route exact path="/office/add-batch" element={<AddBatach/>} ></Route>
          <Route exact path="/office/each-batch" element={<EachBatch/>} ></Route>
          <Route exact path="/office/edit-batch" element={<EditBatch/>} ></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
