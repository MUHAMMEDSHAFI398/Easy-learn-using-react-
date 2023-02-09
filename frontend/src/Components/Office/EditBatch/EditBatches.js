import React, { useEffect, useState } from 'react'
import './EditBatch.css'
import { useLocation } from "react-router-dom"
import axios from '../../../axios'

function EditBatches() {

  const location = useLocation()
  console.log(location.state.id)
  const batchId = location.state.id
  const [batchData, setBatchData] = useState([]);
  const token = localStorage.getItem("token");



  useEffect(() => {
    axios.get(`/office/get-edit-batch/${batchId}`,{
      headers: {      
        Authorization:token
      },
    }).then((response) => {
 
      setBatchData(response.data.batchData)
    })
  },[])
  console.log(batchData)

  return (
    <div className='container'>
      <div className="container border-body  ">
        <div className=" d-flex align-items-center justify-content-center">
          <h5 className="text-decoration-underline ">Edit batch</h5>
        </div>
        <form className=" mb-3"  >

          <div className="d-flex flex-wrap justify-content-between mt-4">

            <div class="d-flex flex-column">
              <label className='ms-4 mt-3'>Number of seat</label>
              <input

                name="numberOfSeat" required
                className="input-tag "
                type="number"
              />
            </div>

            <div className="d-flex flex-column">
              <label className='ms-4 mt-3'>Head of the batch</label>
              <select
                className="input-tag"
                name='headOfTheBatch'
                id=""
              >
                <option disabled selected value=''></option>
                <option value=''>ggh</option>
              </select>

            </div>

            <div className="d-flex flex-column">
              <label className='ms-4 mt-3'>Remarks</label>
              <input

                name="remarks"
                required className="input-tag "
                type="text"
              />
            </div>

          </div>
          <div className='d-flex flex-wrap justify-content-center mt-4'>

            <div className='subjectDiv'>
              <div className='d-flex justify-content-center mt-1'>
                <p className='p-tag'>Edit subjects</p>
              </div>


              <div className='d-flex flex-wrap '>
                <input
                  readOnly
                  className='ms-3 mb-3 mt-1 me-3 input-tag'
                  name='subject' type="text"
                  placeholder='Subject'
                />
                <select
                  className='ms-3 mb-3 mt-1 me-3 input-tag'
                  name='teacher'
                  type="text" placeholder='Teacher'
                  id='subject'
                >
                  <option disabled selected value=''></option>
                  <option>gf</option>
                </select>
              </div>



            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center mt-2">

            <div className="d-flex flex-column">
              <button
                className='btn btn-success rounded-3'
                type='submit'
              >
                Submit
              </button>
            </div>

          </div>

        </form>

      </div>
    </div>
  )
}

export default EditBatches
