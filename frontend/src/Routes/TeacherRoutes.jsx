import { Route, Routes } from 'react-router-dom';
import LoginTeacher from '../Pages/Teacher/LoginTeacher';


const TeacherRoute = () => (
    
    <Routes>
        <Route path="/" element={<LoginTeacher/>} ></Route>
    </Routes>
);

export default TeacherRoute;