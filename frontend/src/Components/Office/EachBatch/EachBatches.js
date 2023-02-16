import React from 'react';
import './EachBatch.css';
import { useNavigate, useLocation } from "react-router-dom"

function EachBatches() {

  // const navigate = useNavigate()
  const location = useLocation();
  const navigate = useNavigate()
  const startDate = location.state.batch[0].startDate
  const DateStart = new Date(startDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const readableStartDate = DateStart.toLocaleDateString('en-US', options);
  const batchId = location.state.batch[0]._id

  const handleClick = () => {
    navigate('/office/edit-batch', {
      state: {
        id: batchId
      }
    })
  }

  return (
    <div className='container'>

      <button onClick={handleClick} className='EditButton'>Edit Batch deatails</button>

      <div className="container mt-4">
        <div className="d-flex flex-wrap justify-content-between">

          <div className='child'>
            <div className="d-flex flex-column align-items-center">
              <h5>Batch performance</h5>
              <h4>25%</h4>
            </div>
          </div>
          <div className='child'>
            <div className="d-flex flex-column align-items-center">
              <h5>Avg batch attenddance</h5>
              <h4>25%</h4>
            </div>
          </div>
          <div className='child'>
            <div className="d-flex flex-column align-items-center">
              <h5>Fee complition rate</h5>
              <h4>25%</h4>
            </div>
          </div>
          <div className='child'>
            <div className="d-flex flex-column align-items-center">
              <h5>Available seat</h5>
              <h4>25%</h4>
            </div>
          </div>

        </div>

        <div className='batch-deatails-parent'>

          <div className='d-flex justify-content-center'>
            <h5 className='heading'>Details of the batch</h5>
          </div>

          <div className='d-flex flex-wrap '>

            <div className='batch-deatails-child d-flex flex-column align-items-center'>
              <p><strong>Batch</strong></p>
              <p>{location.state.batch[0].registerId}</p>
            </div>
            <div className='batch-deatails-child d-flex flex-column align-items-center'>
              <p><strong>Head of the batch</strong></p>
              <p>{location.state.batch[0].teacher_data[0].name}</p>
            </div>
            <div className='batch-deatails-child d-flex flex-column align-items-center'>
              <p><strong>Number of students</strong></p>
              <p>0</p>
            </div>
            <div className='batch-deatails-child d-flex flex-column align-items-center'>
              <p><strong>Start date</strong></p>
              <p>{readableStartDate}</p>
            </div>
            {/* <div className='batch-deatails-child d-flex flex-column align-items-center'>
              <p><strong>End date</strong></p>
              <p>dfjk</p>
            </div> */}
            <div className='batch-deatails-child d-flex flex-column align-items-center'>
              <p><strong>Duration</strong></p>
              <p>{location.state.batch[0].duration}</p>
            </div>
            <div className='batch-deatails-child d-flex flex-column align-items-center'>
              <p><strong>Course fee</strong></p>
              <p>{location.state.batch[0].fee}</p>
            </div>
            <div className='batch-deatails-child d-flex flex-column align-items-center'>
              <p><strong>Total seats</strong></p>
              <p>{location.state.batch[0].numberOfSeat}</p>
            </div>
            <div className='batch-deatails-child d-flex flex-column align-items-center'>
              <p><strong>Subjects</strong></p>
              {
                location.state.batch[0].subjects.map((obj) => {
                  return (
                    <p>{obj.subject} ({obj.teacher})</p>
                  )
                })
              }

            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default EachBatches
