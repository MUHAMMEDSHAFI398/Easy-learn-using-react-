import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminVerification({children}) {
      
    const navigate = useNavigate();
useEffect(()=>{
    console.log('hi')
    if(!localStorage.getItem('officeToken')){   
        navigate('/office')     
    }
},[])
 return children
}
