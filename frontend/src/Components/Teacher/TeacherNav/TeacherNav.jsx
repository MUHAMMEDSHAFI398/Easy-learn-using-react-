import React from 'react'
import Logo from '../../Office/Logo/Logo'
import './TeacherNav.css'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom';

function TeacherNav() {

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("teacherToken")
    message.success("Logout successfully")
    navigate('/teacher')
  }
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "rgb(227, 224, 221)"}}>
    <div className="container-fluid">
      <Logo/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav first-nav">    
          <a className="nav-link " href="/teacher/home">Home</a>
          <a className="nav-link " href="/teacher/mybatch">My batch</a>
          <a className="nav-link " href="/teacher/updateProfile">Update profile</a>
          <p className="nav-link " style={{cursor:"pointer"}} onClick={handleLogout}  >Logout</p>
       
        </div>
      </div>
    </div>
  </nav>

  )
}

export default TeacherNav
