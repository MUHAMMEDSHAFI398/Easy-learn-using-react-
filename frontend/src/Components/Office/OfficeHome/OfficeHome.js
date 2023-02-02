import React from 'react'
import { Link } from "react-router-dom";
import './OfficeHome.css'

function OfficeHome() {
 
  return (
    <div>
      <p className='hi'>this is home page for office admin</p>
      <Link to="/office/add-teacher">
      <button   className='hi btn btn-success'>Add teacher</button>
      </Link>
    </div>
  )
}

export default OfficeHome
