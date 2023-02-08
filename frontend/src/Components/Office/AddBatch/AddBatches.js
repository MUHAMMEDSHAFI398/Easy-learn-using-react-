import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddBatch.css'
import axios from '../../../axios'
function AddBatches() {


  const initialVlaues = {
    startDate: "", duration: "", fee: "", numberOfSeat: "", headOfTheBatch: "", remarks: ""
  };
  const subjectInitiaValues = { subject: "", teacher: "" }

  const [formValues, setFormValues] = useState(initialVlaues);
  const [subjectValue, setSubjectValue] = useState(subjectInitiaValues);
  const [subjectValues, setSubjectValues] = useState([])
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('/office/teachers').then((response) => {
      if (response.data.status) {
        setTeachers(response.data.teachers);
      } else {
        console.log(response);
      }
    })
  },[])

  const onChangeHandle = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSubjectValue({ ...subjectValue, [name]: value });
  };

  const addSubHandle = (e) => {
    e.preventDefault();
    setSubjectValues([...subjectValues, subjectValue]);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
  
    const data = {
      ...formValues,
      subjectValues
    }
    axios.post('/office/add-batch',data).then((response)=>{
      if(response.data.status){
        navigate('/office/batches')
      }else{
        console.log(response.data)
      }
    })
  }

  return (

    <div className='container'>
      <div className="container border-body  ">
        <div className=" d-flex align-items-center justify-content-center">
          <h5 className="text-decoration-underline ">Add new batch</h5>
        </div>
        <form className=" mb-3" onSubmit={handleSubmit} >
          <div className="d-flex flex-wrap justify-content-between">

            <div className="d-flex flex-column">
              <label className='ms-4 mt-3'>Starting date</label>
              <input
                value={formValues.startDate}
                onChange={onChangeHandle}
                name="startDate"
                className="input-tag "
                required type="date"
              />
            </div>

            <div class="d-flex flex-column">
              <label className='ms-4 mt-3'>Duration in month</label>
              <input
                value={formValues.duration}
                onChange={onChangeHandle}
                name="duration"
                required className="input-tag "
                type="number"
              />
            </div>

            <div class="d-flex flex-column">
              <label className='ms-4 mt-3'>Course fee</label>
              <input
                value={formValues.fee}
                onChange={onChangeHandle}
                name="fee" required
                className="input-tag "
                type="number"
              />
            </div>

          </div>
          <div className="d-flex flex-wrap justify-content-between mt-4">

            <div class="d-flex flex-column">
              <label className='ms-4 mt-3'>Number of seat</label>
              <input
                value={formValues.numberOfSeat}
                onChange={onChangeHandle}
                name="numberOfSeat" required
                className="input-tag "
                type="number"
              />
            </div>

            <div className="d-flex flex-column">
              <label className='ms-4 mt-3'>Head of the batch</label>
              <select
               
                value={formValues.headOfTheBatch}
                onChange={onChangeHandle}
                className="input-tag"
                name='headOfTheBatch'
                id=""
              >
                
                {
                  teachers.map((obj)=>{
                    return(
                      <option value={obj.name}>{obj.name}</option>
                    )
                  })
                }
              </select>
            </div>

            <div className="d-flex flex-column">
              <label className='ms-4 mt-3'>Remarks</label>
              <input
                value={formValues.remarks}
                onChange={onChangeHandle}
                name="remarks"
                required className="input-tag "
                type="text"
              />
            </div>

          </div>
          <div className='d-flex flex-wrap justify-content-center mt-4'>

            <div className='subjectDiv'>
              <div className='d-flex justify-content-center mt-1'>
                <p className='p-tag'>Add subjects</p>
              </div>
              <div className='d-flex flex-wrap '>
                <input
                  className='ms-3 mb-3 mt-1 me-3 input-tag'
                  value={subjectValue.subject}
                  onChange={handleChange}
                  name='subject' type="text"
                  placeholder='Subject'
                 
                />
                <select
                  className='ms-3 mb-3 mt-1 me-3 input-tag'
                  value={subjectValue.teacher}
                  onChange={handleChange} name='teacher'
                  type="text" placeholder='Teacher'
                  id='subject'
                >
                  <option selected value=''>Teacher</option>
                 {
                  teachers.map((obj)=>{
                    return(
                      <option value={obj.name}>{obj.name}</option>
                    )
                  })
                }
                </select>
              </div>
              <div className='d-flex justify-content-center mt-1'>
                <button
                  className='btn btn-secondary add-btn mb-3'
                  onClick={addSubHandle}
                >
                  Add
                </button>
              </div>

              {
                subjectValues.map((obj) => {
                  return (
                    <div className='d-flex justify-content-center '>
                      <div className='subjectAndTeacher container'>
                        <p className='mt-2'>{obj.subject}({obj.teacher})</p>
                        <i className='fas fa-times mt-3' onClick={() => {
                          return setSubjectValues(
                            subjectValues.filter((object) => object.subject !== obj.subject)
                          );
                        }}></i>
                      </div>
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

export default AddBatches
