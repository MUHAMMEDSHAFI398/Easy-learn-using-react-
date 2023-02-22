import React, { useState,useEffect} from 'react'
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
  const initialVlaues = { home: true, myBatch: false, myStudents: false, updateProfile: false }
  const [navItem, setHiliteNavItem] = useState(initialVlaues)
  const handleClick = (navItem) => {
    switch(navItem) {
      case 'home':
        setHiliteNavItem({ home: true, myBatch: false, myStudents: false, updateProfile: false })
        break;
      case 'myBatch':
        setHiliteNavItem({ home: false, myBatch: true, myStudents: false, updateProfile: false })
        break;
      case 'myStudents':
        setHiliteNavItem({ home: false, myBatch: false, myStudents: true, updateProfile: false })
        break;
      case 'updateProfile':
        setHiliteNavItem({ home: false, myBatch: false, myStudents: false, updateProfile: true })
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    console.log('navItem updated:', navItem);
  }, [navItem]);
  return (
    <nav className="navbar navbar-expand-lg TeacherNavParent" >
      <div className="container-fluid">
        <Logo />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav first-nav">

            <Link className={`${navItem.home ? 'hilite' : 'non-hilite'}`} to='/teacher/home'>
              <p className="ms-4" onClick={() => handleClick('home')} >Home</p>
              </Link>

            <Link className={`${navItem.myBatch ? 'hilite' : 'non-hilite'}`} to='/teacher/mybatch'>
              <p className="ms-4" onClick={() => handleClick('mybatch')} >My batch</p>
            </Link>

            <Link className={`${navItem.myStudents ? 'hilite' : 'non-hilite'}`} to='/teacher/my-students'>
              <p className="ms-4" onClick={() => handleClick('myStudents')} >My students</p>
              </Link>

            <Link className={`${navItem.updateProfile ? 'hilite' : 'non-hilite'}`} to='/teacher/update-profile'> 
            <p className="ms-4" onClick={() => handleClick('updateProfile')} >Update profile</p>
            </Link>

            <p className="non-hilite ms-4" style={{ cursor: "pointer" }} onClick={handleLogout}  >Logout</p>

          </div>
        </div>
      </div>
    </nav>

  )
}

export default TeacherNav
