import { Route, Routes } from 'react-router-dom';
import HomeTeacher from '../Pages/Teacher/HomeTeacher';
import LoginTeacher from '../Pages/Teacher/LoginTeacher';


const TeacherRoute = () => (
    
    <Routes>
        <Route path="/" element={<LoginTeacher/>} ></Route>
        <Route path="/home" element={<HomeTeacher/>} ></Route>
    </Routes>
);

export default TeacherRoute;