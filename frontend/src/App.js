import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from "./Pages/Landing/Landing";
import OfficeRoutes from "./Routes/OfficeRoutes";
import TeacherRoutes from "./Routes/TeacherRoutes";
import AdminVerification from "./Varification/AdminVerification";
import StudentRoutes from "./Routes/StudentRoutes";
import TeacherVarification from "./Varification/TeacherVarification";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<Landing />} />
          <Route path='/office/*' element={<AdminVerification><OfficeRoutes /></AdminVerification>} />
          <Route path='/teacher/*' element={<TeacherVarification><TeacherRoutes /></TeacherVarification>} />
          <Route path='/student/*' element={<StudentRoutes />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
