import React, { useEffect } from 'react'
import { useState } from 'react'
import { getDashbordDataAPI } from '../../../Services/OfficeServices'
import './OfficeHome.css'

function OfficeHome() {

  const [counts ,setCounts]=useState({studentsCount:"", batchCount: "" ,teacherCount: "",feeCompletionRate:""})
  
  useEffect(()=>{
    const headers = {
      headers: {
          Authorization: localStorage.getItem("officeToken")
      }
  }
    getDashbordDataAPI(headers).then((response)=>{
      setCounts(response.data)
    })
  },[])
 
  return (
    <div className='container'>
      <div className='container d-flex flex-wrap justify-content-between align-items-center mt-5'>

        <div className='headChilds'>

          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-center mt-1'>
              <h4>Number of batches</h4>
            </div>
            <div>
              <div className='d-flex justify-content-center'>
                <h3>{counts.batchCount}</h3>
              </div>
            </div>
          </div>

        </div>
        <div className='headChilds'>

          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-center mt-1'>
              <h4>Number of Students</h4>
            </div>
            <div>
              <div className='d-flex justify-content-center'>
                <h3>{counts.studentsCount}</h3>
              </div>
            </div>
          </div>

        </div>
        <div className='headChilds'>

          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-center mt-1'>
              <h4>Number of teachers</h4>
            </div>
            <div>
              <div className='d-flex justify-content-center'>
                <h3>{counts.teacherCount}</h3>
              </div>
            </div>
          </div>

        </div>
        <div className='headChilds'>

          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-center mt-1'>
              <h4>Fee complition rate</h4>
            </div>
            <div>
              <div className='d-flex justify-content-center'>
                <h3>{counts.feeCompletionRate} %</h3>
              </div>
            </div>
          </div>

        </div>
      </div>



    



    </div>
  )
}

export default OfficeHome
