import axios from "../axios";

const teacherToken =localStorage.getItem('teacherToken');
const headers = { headers: {
    Authorization: teacherToken
  }}
export const getHome =()=>{
    return axios.get('teacher/home',headers)
}