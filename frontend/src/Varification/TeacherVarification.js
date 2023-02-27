import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../Redux/Action/Index';
import { getHome } from '../Services/TeacherServices'


export default function TeacherVarification({ children }) {

    const dispatch = useDispatch();
    const { storeTeacherData } = bindActionCreators(actionCreators, dispatch);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('teacherToken')) {
            navigate('/teacher')
        }
    }, [])
    useEffect(()=>{
        if(localStorage.getItem('teacherToken')){
            getHome().then((response) => {
                storeTeacherData(response.data.teacherData)
            }) 
        }
    },[])
    return children

    
}





