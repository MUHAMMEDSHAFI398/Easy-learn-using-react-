import React, { useEffect, useState } from 'react'
import './EditBatch.css'
import { useLocation, useNavigate } from "react-router-dom"
import axios from '../../../axios'
import validate from './Validation';

function EditBatches() {

  const navigate = useNavigate('')
  const location = useLocation()
  const batchId = location.state.id
  const [teachers, setTeachers] = useState([{ name: '', registerId: '' }])
  const [availableTeachers, setAvailableTeachers] = useState([{ name: '', registerId: '' }])
  const [batchData, setBatchData] = useState({
    numberOfSeat: "",
    remarks: "",
    headOfTheBatch: "",
    batchHeadId: ""
  });
  const [error, setErrors] = useState({});
  const [subjectValues, setSubjectValues] = useState([{ subject: "", teacher: "" }])
  const officeToken = localStorage.getItem("officeToken");



  useEffect(() => {
    axios.get(`/office/get-edit-batch/${batchId}`, {
      headers: {
        Authorization: officeToken
      },
    }).then((response) => {

      setTeachers(response.data.teachers)
      setAvailableTeachers(response.data.availableTeachers)
      const batchData = { ...response.data.batchData[0] }
      const subjectValues = response.data.batchData[0].subjects
      setBatchData(batchData)
      setSubjectValues(subjectValues)


    })
  }, [officeToken, batchId])


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBatchData({ ...batchData, [name]: value });
    setErrors({ ...error, [name]: "" });

  };



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
    const errors = validate(batchData);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    } else {
      axios.patch(`/office/edit-batch/${batchId}`, {
        subjectValues,
        ...batchData,

      }, {
        headers: {
          Authorization: officeToken
        },
      }).then((response) => {
        if (response.data.status) {
          navigate('/office/batches')
        }
      })
    }


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
              <label className='ms-2 mt-3'>Number of seat</label>
              <input
                onChange={handleChange}
                value={batchData.numberOfSeat}
                name="numberOfSeat" 
                className="input-tag "
                type="number"
              />
     {error.numberOfSeat && (<p className="ms-2 text-danger">{error.numberOfSeat}</p>)}

            </div>

            <div className="d-flex flex-column">
              <label className='ms-2 mt-3'>Head of the batch</label>
              <select
                onChange={handleChange}
                className="input-tag"
                name='batchHeadId'
                id="batchHeadId"
              >
                <option value={batchData.batchHeadId}>{batchData.headOfTheBatch}</option>
                {
                  availableTeachers.map((obj, index) => {
                    return (
                      <option key={index} value={obj.registerId}>{obj.name} ({obj.registerId})</option>
                    )
                  })
                }
              </select>
              {error.headOfTheBatch && (<p className="ms-2 text-danger">{error.headOfTheBatch}</p>)}


            </div>

            <div className="d-flex flex-column">
              <label className='ms-2 mt-3'>Remarks</label>
              <input
                onChange={handleChange}
                value={batchData.remarks}
                name="remarks"
               className="input-tag "
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
                        <option defaultValue value={obj.teacher}>{obj.teacher}</option>
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
