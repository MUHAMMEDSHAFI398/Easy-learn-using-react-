import React, { useEffect, useState } from 'react'
import './EditBatch.css'
import { useLocation, useNavigate } from "react-router-dom"
import axios from '../../../axios'

function EditBatches() {

  const navigate = useNavigate('')
  const location = useLocation()
  const batchId = location.state.id
  const [teachers, setTeachers] = useState([{ name: '' }])
  const [batchData, setBatchData] = useState({
    numberOfSeat: "",
    remarks: "",
    headOfTheBatch: ""
  });

  const [subjectValues, setSubjectValues] = useState([{ subject: "", teacher: "" }])
  const token = localStorage.getItem("token");


  useEffect(() => {
    axios.get(`/office/get-edit-batch/${batchId}`, {
      headers: {
        Authorization: token
      },
    }).then((response) => {

      setTeachers(response.data.teachers)
      const batchData = { ...response.data.batchData[0] }
      const subjectValues = response.data.batchData[0].subjects
      setBatchData(batchData)
      setSubjectValues(subjectValues)

    })
  }, [token, batchId])


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBatchData({ ...batchData, [name]: value });
  };



  //   const handleTeacherChange = (e, index) => {
  //     const values = [...subjectValues];
  //     console.log(e.target.value)
  //     values[0].teacher = e.target.value;
  //     setSubjectValues(values);
  //     console.log(values)
  // };

  const handleTeacherChange = (e, index) => {
    const values = [...subjectValues];
    const updatedSubject = values.map((subject, i) => {
      if (i === index) {
        return { ...subject, teacher: e.target.value };
      }
      return subject;
    });
    setSubjectValues(updatedSubject);
    
  };
 
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.patch('/office/edit-batch', {
      subjectValues,
      ...batchData
      
    }).then((response) => {
      if (response.data.status) {
        navigate('/office/each-batch')
      }
    })

  }



  return (
    <div className='container'>
      <div className="container border-body  ">
        <div className=" d-flex align-items-center justify-content-center">
          <h5 className="text-decoration-underline ">Edit batch</h5>
        </div>
        <form className=" mb-3" onSubmit={handleSubmit} >

          <div className="d-flex flex-wrap justify-content-between mt-4">

            <div class="d-flex flex-column">
              <label className='ms-4 mt-3'>Number of seat</label>
              <input
                onChange={handleChange}
                value={batchData.numberOfSeat}
                name="numberOfSeat" required
                className="input-tag "
                type="number"
              />
            </div>

            <div className="d-flex flex-column">
              <label className='ms-4 mt-3'>Head of the batch</label>
              <select
                onChange={handleChange}
                value={batchData.headOfTheBatch}
                className="input-tag"
                name='headOfTheBatch'
                id="headOfTheBatch"
              >
                <option selected value={batchData.headOfTheBatch}>{batchData.headOfTheBatch}</option>
                {
                  teachers.map((obj) => {
                    return (
                      <option value={obj.name}>{obj.name}</option>
                    )
                  })
                }
              </select>

            </div>

            <div className="d-flex flex-column">
              <label className='ms-4 mt-3'>Remarks</label>
              <input
                onChange={handleChange}
                value={batchData.remarks}
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
              {
                subjectValues.map((obj, index) => {
                  return (
                    <div className='d-flex flex-wrap '>
                      <input

                        value={obj.subject}
                        readOnly
                        className='ms-3 mb-3 mt-1 me-3 input-tag'
                        name='subject' type="text"

                      />
                      <select
                        onChange={(e) => handleTeacherChange(e, index)}
                        className='ms-3 mb-3 mt-1 me-3 input-tag'
                        name='teacher'
                        type="text" placeholder='Teacher'
                        id='subject'
                      >
                        <option selected value={obj.teacher}>{obj.teacher}</option>
                        {
                          teachers.map((obj) => {
                            return (

                              <option value={obj.name}>{obj.name} ({obj.registerId})</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  )
                })


              }

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
