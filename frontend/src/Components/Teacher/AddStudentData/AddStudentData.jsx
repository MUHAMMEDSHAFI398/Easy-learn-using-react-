import React, { useEffect, useState } from 'react'
import { availableMonthAPI, postStudentAttendanceAPI, attenDanceDetailsAPI, getBatchSubjectsAPI } from '../../../Services/TeacherServices'
import './AddStudentData.css'
import { message } from 'antd'
import validate from './validation'
import { useLocation } from "react-router-dom"
import Swal from 'sweetalert2'

function AddStudentData() {

  const location = useLocation();
  const [availableMonth, setAvailableMonth] = useState([])
  const [formNoOfDays, setFormNoOfDays] = useState({ noOfDaysPresent: "" })
  const [formMonth, setFormMonth] = useState({ month: "", workingDays: "" })
  const [error, setErrors] = useState({})
  const [monthData, setMonthData] = useState([])
  const [subjects, setSubjects] = useState([])

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
  useEffect(() => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem('teacherToken')
      }
    }
    const studentId = location.state.studentData.registerId
    attenDanceDetailsAPI(studentId, headers).then((response) => {
      if (response.data.status) {
        setMonthData(response.data.attendanceData)
      }
    })
  }, [])
  useEffect(() => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem('teacherToken')
      }
    }
    const batchId = location.state.studentData.batch
    getBatchSubjectsAPI(batchId, headers).then((response) => {
      setSubjects(response.data.subjects)
    })
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormNoOfDays({ ...formNoOfDays, [name]: value });
    setErrors({ ...error, [name]: "" });
  }


  const changeHandle = (e, workingDays) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormMonth({ month: value, workingDays: workingDays });
    setErrors({ ...error, [name]: "" });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validate(formMonth, formNoOfDays);
    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
    } else {
      Swal.fire({
        text: "Are you sure you want to submit?",
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Yes'

      }).then((result) => {

        if (result.isConfirmed) {
          const headers = {
            headers: {
              Authorization: localStorage.getItem('teacherToken')
            }
          }
          const data = {
            studentId: location.state.studentData.registerId,
            month: formMonth.month,
            noOfDaysPresent: formNoOfDays.noOfDaysPresent,
            workingDays: formMonth.workingDays
          }

          postStudentAttendanceAPI(data, headers).then((response) => {
            if (response.data.alert) {
              Swal.fire({
                text: response.data.alert,
                confirmButtonColor: 'green',
                confirmButtonText: 'OK'
              })

            } else if (response.data.status) {
              message.success('Successfully submitted the data')
              setMonthData(response.data.attendanceData)
              setFormMonth({ month: "", workingDays: "" })
              setFormNoOfDays({ noOfDaysPresent: "" })

            }
          })
        }
      })

    }

  }

  return (
    <div className='container'>

      <div className='container ms-2 me-4 '>
        <div className='monthParentDivss'>
          <div className='d-flex justify-content-center align-items-center'>
            <h5 className='titlestyle mt-3 mb-4'>Monthly attendance details</h5>
          </div>

          <div className='container d-flex flex-wrap align-items-center monthlyData' >

            {
              monthData?.map((obj) => {
                const dateStr = obj.month;
                const date = new Date(dateStr);
                const formattedDate = date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
                return (
                  <div key={obj._id} className='childOfMonthlyDatas ms-1 me-1'>
                    <div className='d-flex justify-content-center align-items-center'>
                      <p className='monthName'>{formattedDate}</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center' >
                      <p className='numberworkingday'>Working days : {obj.workingDays} d</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center' >
                      <p className='numberworkingday'>Present days : {obj.noOfDaysPresent} d</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center' >
                      <p className='numberworkingdays'>Percentage : {obj.percent} %</p>
                    </div>
                  </div>

                )
              })
            }

          </div>
        </div>
      </div>



      <div className='d-flex flex-wrap justify-content-between align-items-center ms-4 me-4 mb-5'>

        <div className='flexItemsStyle'>

          <div className='d-flex justify-content-center align-items-center mt-3'>
            <p className='leave-leter'>Add attendance</p>
          </div>

          <div className='container d-flex flex-wrap flex-column justify-content-center align-items-center mt-3'>

            <div className='d-flex flex-column mt-2'>
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
            <div className='container d-flex flex-column justify-content-center align-items-center mt-3'>
              <form>

              <div className='d-flex justify-content-center align-items-center mt-3'>
               <input className='subjectFixedinput' name='monthinput' type="month" />
                </div>
              {
                subjects?.map((obj) => {
                 return(
                  <div className='d-flex justify-content-center align-items-center mt-3'>
                  <input value={obj.subject} className='subjectFixedinput mt-1' type="text" />
                  <input placeholder='Mark (Out of 100)' className='markInput ms-2 mt-1' type="number" />
                </div>
                 ) 
                }) 

              }
               <button type='submit' className='datasubmittbtn'>Submit</button>
               </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default AddStudentData
