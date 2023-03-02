import React, { useEffect, useState } from 'react'
import { availableMonthAPI, postStudentAttendanceAPI } from '../../../Services/TeacherServices'
import './AddStudentData.css'
import { message } from 'antd'
import validate from './validation'

function AddStudentData() {


  const [availableMonth, setAvailableMonth] = useState([])
  const [formNoOfDays, setFormNoOfDays] = useState({ noOfDaysPresent: "" })
  const [formMonth, setFormMonth] = useState({ month: "", workingDays:""})
  const [error, setErrors] = useState({})
  useEffect(() => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem('teacherToken')
      }
    }
    availableMonthAPI(headers).then((response) => {
      setAvailableMonth(response.data.availableMonth)
    })
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormNoOfDays({ ...formNoOfDays, [name]: value });
    setErrors({ ...error, [name]: "" });
  }


  const changeHandle = (e,workingDays) => {
    e.preventDefault();
    const {name, value } = e.target;
    setFormMonth({ month:value, workingDays:workingDays });
    setErrors({ ...error, [name]: "" });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validate(formMonth,formNoOfDays);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    }else{
      const headers = {
        headers: {
          Authorization: localStorage.getItem('teacherToken')
        }
      }
      const data ={
        month:formMonth.month,
        noOfDaysPresent:formNoOfDays.noOfDaysPresent
      }
      
      postStudentAttendanceAPI(data,headers).then((response) => {
        if (response.data.status) {
          message.success('Successfully submitted the data')
        }
      })
    }
    
  }

  return (
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-between align-items-center ms-4 me-4 mb-5'>

        <div className='flexItemsStyle'>

          <div className='d-flex justify-content-center align-items-center mt-3'>
            <p className='leave-leter'>Add attendance</p>
          </div>

          <div className='d-flex flex-wrap flex-column justify-content-center align-items-center mt-3'>

            <div className='d-flex flex-column mt-5 '>
              <p className='mb-1'>Month</p>
              <select
                onChange={(e) => changeHandle(
                  e,
                  availableMonth.find(obj => obj.month === e.target.value)?.numberOfWorkingDays
                )}
                value={formMonth?.month}
                className='inputMonthData'
                name="month"
                id="month"
              >
                <option value="Select a month" defaultValue >Select a month</option>
                {
                  availableMonth?.map((obj) => {
                    const dateStr = obj.month;
                    const date = new Date(dateStr);
                    const formattedDate = date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
                    return (
                      <option name="month"
                        key={obj._id}
                        value={obj.month}>
                        {formattedDate} (working days {obj.numberOfWorkingDays})
                      </option>
                    )
                  })
                }
              </select>
              {error?.month && <p className="ms-2 text-danger">{error?.month}</p>}
            </div>

            <div className='d-flex flex-column mt-5'>
              <p className='mb-1'>Number of days present</p>
              <input
                onChange={handleChange}
                value={formNoOfDays?.noOfDaysPresent}
                className='inputMonthData'
                name='noOfDaysPresent'
                type="number"
              />
              {error?.noOfDaysPresent && <p className="ms-2 text-danger">{error?.noOfDaysPresent}</p>}
            </div>

            <div className='d-flex flex-column'>
              <button onClick={handleSubmit} className='datasubmitbtn' type='submit'>Submit</button>
            </div>

          </div>

        </div>

        <div>

          <div className='flexItemsStyle'>

            <div className='d-flex justify-content-center align-items-center mt-3'>
              <p className='leave-leter'>Add marks</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default AddStudentData
