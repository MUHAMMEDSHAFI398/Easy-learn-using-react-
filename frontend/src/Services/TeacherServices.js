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