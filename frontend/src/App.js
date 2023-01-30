import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Office/Login';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/> } ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
