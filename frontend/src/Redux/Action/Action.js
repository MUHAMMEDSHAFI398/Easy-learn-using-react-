export const storeTeacherData =(teacherData)=>{
    return (dispatch)=>{
        dispatch({
            type:"storeTeacherData",
            teacherData:teacherData,
        })
    }
}

