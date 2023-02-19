import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from "./Pages/Landing/Landing";
import OfficeRoutes from "./Routes/OfficeRoutes";
import TeacherRoutes from "./Routes/TeacherRoutes";
import StudentRoutes from "./Routes/StudentRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<Landing/>} />
          <Route path='/office/*' element={<OfficeRoutes />} />
          <Route path='/teacaher/*' element={<TeacherRoutes />} />
          <Route path='/student/*' element={<StudentRoutes />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
