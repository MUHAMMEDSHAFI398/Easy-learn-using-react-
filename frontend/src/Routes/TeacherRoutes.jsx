import { Route, Routes } from 'react-router-dom';
import TeacherVarification from '../AdminVerificaton/TeacherVarification';
import HomeTeacher from '../Pages/Teacher/HomeTeacher';
import LoginTeacher from '../Pages/Teacher/LoginTeacher';
import UpdateProfile from '../Pages/Teacher/UpdateProfile';



const TeacherRoute = () => (
    
    <Routes>
        <Route path="/" element={<TeacherVarification><LoginTeacher/></TeacherVarification>} ></Route>

        <Route path="/home" element={<TeacherVarification><HomeTeacher/></TeacherVarification>} ></Route>
        
        <Route path="/update-profile" element={<TeacherVarification><UpdateProfile/></TeacherVarification>} ></Route>
    </Routes>
);

export default TeacherRoute;