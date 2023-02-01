import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ViewTeacher from "./Pages/Office/viewTeacher";
import AddTeacher from "./Pages/Office/AddTeacher";
import Login from './Pages/Office/Login';
import OfficeHome from "./Pages/Office/OfficHome";
import EachTeacher from "./Pages/Office/EachTeacher";



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

        </Routes>
      </Router>
    </div>
  );
}

export default App;
