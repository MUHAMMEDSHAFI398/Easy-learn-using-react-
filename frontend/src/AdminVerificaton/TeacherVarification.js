import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TeacherVarification({children}) {
    const navigate = useNavigate();
useEffect(()=>{
    if(!localStorage.getItem('teacherToken')){   
        navigate('/teacher')     
    }
},[])
 return children
}
