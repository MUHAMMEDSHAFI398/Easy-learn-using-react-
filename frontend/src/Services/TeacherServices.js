import axios from "../axios";


export const getHomeAPI =(headers)=>{
    return axios.get('/teacher/home',headers)
}

export const updateProfileAPI = (data,headers)=>{
  return axios.patch('/teacher/update-profile',data,headers)
}

export const getMyStudents = (headers) =>{
  return axios.get('/teacher/my-students',headers)
}

export const eachStudentAPI = (id,headers) =>{
  return axios.get(`/teacher/each-student/${id}`,headers)
} 

export const getMyBatchAPI = (headers)=>{
  return axios.get('/teacher/my-batch',headers)
}

export const postLetterAPI = (data,headers)=>{
  return axios.post('/teacher/letter',data,headers)
}

export const leaveHistoryAPI = (headers)=>{
  return axios.get('/teacher/leave-history',headers)
}