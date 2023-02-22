import React from 'react'
import Logo from '../../Office/Logo/Logo'
import './TeacherNav.css'
import { message } from 'antd'
import { useNavigate, Link } from 'react-router-dom';

function TeacherNav() {

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("teacherToken")
    message.success("Logout successfully")
    navigate('/teacher')
  }
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(227, 224, 221)" }}>
      <div className="container-fluid">
        <Logo />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav first-nav">
            <Link style={{ textDecoration: "none" }} to='/teacher/home'><p className="nav-link" >Home</p></Link>
            <Link style={{ textDecoration: "none"}} to='/teacher/mybatch'><p className="nav-link" >My batch</p></Link>
            <Link style={{ textDecoration: "none"}} to='/teacher/update-profile'> <p className="nav-link" >Update profile</p></Link>
            <p className="nav-link" style={{ cursor: "pointer" }} onClick={handleLogout}  >Logout</p>

          </div>
        </div>
      </div>
    </nav>

  )
}

export default TeacherNav
