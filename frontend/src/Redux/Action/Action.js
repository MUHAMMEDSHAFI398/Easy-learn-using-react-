export const storeAdminToken =(data)=>{
   
    return (dispatch)=>{
        dispatch({
            type:"storeAdminToken",
            token:data.jwtToken,
        })
    }
}

export const removeAdminToken = (data)=>{
    return (dispatch)=>{
        dispatch({
            type:"removeAdminToken",
            token:data.jwtToken,
        })
    }
}