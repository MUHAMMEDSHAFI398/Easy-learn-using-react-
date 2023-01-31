import React from 'react'
import { useNavigate} from "react-router-dom";

function OfficeHome() {
  const navigate = useNavigate();
  const handleClick = (e)=>{
       e.preventDefault();
       navigate('/office/add-teacher')
  }

  return (
    <div>
      <p>this is home page for office admin</p>
      <button onClick={handleClick}  className='btn btn-success'>Add teacher</button>
    </div>
  )
}

export default OfficeHome
