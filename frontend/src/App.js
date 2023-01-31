import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Office/Login';
import OfficHome from "./Pages/Office/OfficHome";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/office" element={<Login/> } ></Route>
          <Route exact path="/office/home" element={<OfficHome/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
