import axios from "../axios";
const officeToken = localStorage.getItem("officeToken");
const headers = {
    headers: {
        Authorization: officeToken
    }
}
const headers2 = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: officeToken
    },
}

export const availableTeachersAPI = () => {
    return axios.get('/office/available-teachers', headers)
}
export const addBatchAPI = (data) => {
    return axios.post('/office/add-batch', data, headers)
}
export const availableBatchAPI = () => {
    return axios.get('/office/available-batches', headers)
}
export const addStudentAPI = (data) => {
    return axios.post('/office/add-student', data, headers2)
}
export const addTeacherAPI = (data) => {
    return axios.post('/office/add-teacher', data, headers2)
}
export const officeLoginAPI = (data) => {
    return axios.post('office/login', data)
}
export const handleGetStudentAPI = (id) => {
    return axios.get(`/office/student/${id}`, headers)
}
export const blockStudentAPI = (id) => {
    return axios.patch(`/office/block-student/${id}`,{}, headers)
}
export const unBlockStudentAPI = (id) => {
    return axios.patch(`/office/unblock-student/${id}`,{}, headers)
}
export const editTeachertAPI = (id,formValues) => {
    return axios.patch(`/office/edit-teacher/${id}`,formValues, headers)
}
export const getTeacherAPI = (id) => {
    return axios.get(`/office/get-teacher/${id}`, headers)
}
export const blockTeacherAPI = (id) => {
    return axios.patch(`/office/block-teacher/${id}`,{}, headers)
}
export const unBlockTeacherAPI = (id) => {
    return axios.patch(`/office/unblock-teacher/${id}`,{}, headers)
}
export const getEditBatchAPI = (id) => {
    return axios.get(`/office/get-edit-batch/${id}`, headers)
}
export const editBatchAPI = (id,data) => {
    return axios.patch(`/office/edit-batch/${id}`,data, headers)
}
export const getBatches = () => {
    return axios.get('/office/batches', headers)
}
export const getEachBatch = (id) => {
    return axios.get(`/office/get-batch/${id}`, headers)
}
export const getstudentsAPI = () => {
    return axios.get('/office/students', headers)
}
export const getTeachersAPI = () => {
    return axios.get('/office/teachers', headers)
}

export const leaveApplcationsAPI = () => {
    return axios.get('/office/leave-applications', headers)
}
