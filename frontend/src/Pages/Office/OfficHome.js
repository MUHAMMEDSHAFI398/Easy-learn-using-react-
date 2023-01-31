import React from 'react'
import OfficeHome from '../../Components/Office/OfficeHome/OfficeHome';
import Sidebar from '../../Components/Office/Sidebar/Sidebar';


function OfficHome() {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <OfficeHome/>
    </div>
  )
}

export default OfficHome
