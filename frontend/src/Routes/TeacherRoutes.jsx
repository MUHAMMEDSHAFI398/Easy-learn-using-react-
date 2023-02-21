import { Route, Routes } from 'react-router-dom';
import TeacherVarification from '../AdminVerificaton/TeacherVarification';
import HomeTeacher from '../Pages/Teacher/HomeTeacher';
import LoginTeacher from '../Pages/Teacher/LoginTeacher';


const TeacherRoute = () => (
    
    <Routes>
        <Route path="/" element={<TeacherVarification><LoginTeacher/></TeacherVarification>} ></Route>
        <Route path="/home" element={<TeacherVarification><HomeTeacher/></TeacherVarification>} ></Route>
    </Routes>
);

export default TeacherRoute;