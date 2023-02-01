import React from 'react'
import { useNavigate} from "react-router-dom";
import './OfficeHome.css'

function OfficeHome() {
  const navigate = useNavigate();
  const handleClick = (e)=>{
       e.preventDefault();
       navigate('/office/add-teacher')
  }

  return (
    <div>
      <p className='hi'>this is home page for office admin</p>
      <button  onClick={handleClick}  className='hi btn btn-success'>Add teacher</button>
    </div>
  )
}

export default OfficeHome
