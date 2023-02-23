import axios from "../axios";

const teacherToken =localStorage.getItem('teacherToken');
const headers = { headers: {
    Authorization: teacherToken
  }}

export const getHome =()=>{
    return axios.get('teacher/home',headers)
}

export const updateProfileAPI = (teacherData,address)=>{
  const data={
    teacherData:teacherData,
    address:address
  }
  return axios.patch('teacher/update-profile',data,headers)
}

export const getMyStudents = () =>{
  return axios.get('teacher/my-students',headers)
}

export const eachStudentAPI = (id) =>{
  return axios.get(`teacher/each-student/${id}`,headers)
} 

export const getMyBatchAPI = ()=>{
  return axios.get('teacher/my-batch',headers)
}