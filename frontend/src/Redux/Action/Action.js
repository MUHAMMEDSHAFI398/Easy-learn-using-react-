export const storeAdminToken =(jwtToken)=>{
    return (dispatch)=>{
        dispatch({
            type:"storeAdminToken",
            officeToken:jwtToken,
        })
    }
}

export const removeAdminToken = (jwtToken)=>{
    return (dispatch)=>{
        dispatch({
            type:"removeAdminToken",
            officeToken:jwtToken,
        })
    }
}