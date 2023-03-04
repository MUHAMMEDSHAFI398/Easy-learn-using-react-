import axios from "../axios";


export const getHomeAPI = (headers) => {
  return axios.get('/teacher/home', headers)
}

export const updateProfileAPI = (data, headers) => {
  return axios.patch('/teacher/update-profile', data, headers)
}

export const getMyStudents = (headers) => {
  return axios.get('/teacher/my-students', headers)
}

export const eachStudentAPI = (id, headers) => {
  return axios.get(`/teacher/each-student/${id}`, headers)
}

export const getMyBatchAPI = (headers) => {
  return axios.get('/teacher/my-batch', headers)
}

export const postLetterAPI = (data, headers) => {
  return axios.post('/teacher/letter', data, headers)
}

export const leaveHistoryAPI = (headers) => {
  return axios.get('/teacher/leave-history', headers)
}

export const batchStartEndAPI = (headers) => {
  return axios.get('/teacher/start-end', headers)
}

export const postWorkingDaysAPI = (data, headers) => {
  return axios.post('/teacher/add-working-days', data, headers)
}

export const getmonthlyWorkDaysAPI = (headers) => {
  return axios.get('/teacher/month-work-days', headers)
}

export const availableMonthAPI = (headers) => {
  return axios.get('/teacher/available-month', headers)
}

export const postStudentAttendanceAPI = (data, headers) => {
  return axios.post('/teacher/add-attendance', data, headers)
}

export const attenDanceDetailsAPI = (id,headers) => {
  return axios.get(`/teacher/attendance-data/${id}`, headers)
}

export const getBatchSubjectsAPI = (batchId,headers) => {
  return axios.get(`/teacher/batch-subjects/${batchId}`, headers)
}