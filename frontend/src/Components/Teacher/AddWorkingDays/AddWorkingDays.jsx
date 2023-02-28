import React from 'react'
import './AddWorkingDays.css'


function AddWorkingDays() {
  return (
    <div className='container'>
        <div className='container mt-5 mb-5'>
            <div className='d-flex justify-content-center align-items-center'>
               <div className='workDiv'>
                  <div className='d-flex justify-content-center align-items-center'>
                     <h5 className='titlestyle'>Add number of working days</h5>
                  </div>
                  <div className='d-flex flex-wrap jsustify-content-between mb-3'>
                    <select className='workInpt ms-2 me-2 mt-2' name="month" id="month">
                    <option defaultValue disabled value=''>Select a month</option>
                        <option value="">vaue</option>
                        <option value="">vaue</option>
                        <option value="">vaue</option>
                        <option value="">vaue</option>
                    </select>
                    <input placeholder='Number of working days' className='workInpt ms-2 me-2 mt-2' type="number" />
                    <button className='submtbtn ms-2 me-2 mt-2'>Submit</button>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AddWorkingDays
