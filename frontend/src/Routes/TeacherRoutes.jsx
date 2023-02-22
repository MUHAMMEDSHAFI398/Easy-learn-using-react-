import { Route, Routes } from 'react-router-dom';
import TeacherVarification from '../Varification/TeacherVarification';
import HomeTeacher from '../Pages/Teacher/HomeTeacher';
import LoginTeacher from '../Pages/Teacher/LoginTeacher';
import MyStudent from '../Pages/Teacher/MyStudent';
import UpdateProfile from '../Pages/Teacher/UpdateProfile';



const TeacherRoute = () => (

    <Routes>

        <Route path="/" element={<LoginTeacher />} ></Route>

        <Route path="/home" element={<HomeTeacher />} ></Route>

        <Route path="/update-profile" element={<UpdateProfile />} ></Route>

        <Route path="/my-students" element={<MyStudent />} ></Route>

    </Routes>
);

export default TeacherRoute;