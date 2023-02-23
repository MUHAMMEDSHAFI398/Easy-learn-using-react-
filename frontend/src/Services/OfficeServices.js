import axios from "../axios";
const officeToken = localStorage.getItem("officeToken");
const headers = {
    headers: {
        Authorization: officeToken
    }
}

export const availableTeachersAPI = (id) =>{
    return axios.get('/office/available-teachers',headers)
  }