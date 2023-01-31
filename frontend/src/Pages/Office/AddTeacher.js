import React from 'react'
import Sidebar from '../../Components/Office/Sidebar/Sidebar';
import AddTeachers from '../../Components/Office/AddTeacher/AddTeacher';

function AddTeacher() {
  return (
    <div>
      <div className='d-flex'>
      <Sidebar/>
      <AddTeachers/>
    </div>
    </div>
  )
}

export default AddTeacher
