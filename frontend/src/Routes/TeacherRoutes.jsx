import { Route, Routes } from 'react-router-dom';
import HomeTeacher from '../Pages/Teacher/HomeTeacher';
import LoginTeacher from '../Pages/Teacher/LoginTeacher';
import MyStudent from '../Pages/Teacher/MyStudent';
import UpdateProfile from '../Pages/Teacher/UpdateProfile';
import EachStudentView from '../Pages/Teacher/EachStudentView';
import MyBatchPage from '../Pages/Teacher/MyBatchPage';



const TeacherRoute = () => (

    <Routes>

        <Route path="/" element={<LoginTeacher />} ></Route>

        <Route path="/home" element={<HomeTeacher />} ></Route>

        <Route path="/update-profile" element={<UpdateProfile />} ></Route>

        <Route path="/my-students" element={<MyStudent />} ></Route>

        <Route path="/each-student" element={<EachStudentView />} ></Route>

        <Route path="/my-batch" element={<MyBatchPage />} ></Route>



    </Routes>
);

export default TeacherRoute;