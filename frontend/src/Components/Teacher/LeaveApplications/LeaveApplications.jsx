import React, { useState, useEffect } from 'react'
import './LeaveApplication.css'
import { CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { postLetterAPI } from '../../../Services/TeacherServices';
import { message } from 'antd'
import Swal from 'sweetalert2'
import { leaveHistoryAPI } from '../../../Services/TeacherServices';
import validate
  from './validation';
function LeaveApplications() {

  const [letter, setLetter] = useState({ leaveLetter: "" })
  const [error, setErrors] = useState({});
  const [leaveHistory, setLeaveHistory] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalvalues, setModalValues] = useState({ date: "", status: "", letter: "" })

  useEffect(() => {
    const headers = { headers: {
      Authorization: localStorage.getItem('teacherToken')
    }}
    leaveHistoryAPI(headers).then((response) => {
      if (response.data.status) {
        setLeaveHistory(response.data.leaveHistory)
      }
    })
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLetter({ ...letter, [name]: value });
    setErrors({ ...error, [name]: "" });
  };

  const handleModalClick = (date, status, letter) => {
    setIsModalOpen(true)
    setModalValues({ date: date, status: status, letter: letter })
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const errors = validate(letter);

    if (Object.keys(errors).length !== 0) {
      setErrors(errors);

    } else {
      Swal.fire({

        text: "Are you sure you want submit leave application?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Yes'

    }).then((result)=>{

      if(result.isConfirmed){
        const headers = { headers: {
          Authorization: localStorage.getItem('teacherToken')
        }}
        postLetterAPI(letter,headers).then((response) => {
          if (response.data.status) {
            message.success('Successfully sent leave application?')
            setLetter({ leaveLetter: "" });
            leaveHistoryAPI(headers).then((response) => {
              if (response.data.status) {
                setLeaveHistory(response.data.leaveHistory)
              }
            })
          }
        })
      }
    })
      
    }
  }


  const data = () => {
    return {
      columns: [
        {
          label: 'SL NO',
          field: 'slno',
          width: 50,
        },
        {
          label: 'Applied date',
          field: 'AppliedDate',
          width: 100,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Status',
          field: 'status',
          width: 90,
        },
        {
          label: 'View',
          field: 'view',
          width: 80,
        },
      ],

      rows: leaveHistory?.map((leave, index) => {

        const dateString = leave.myLeaves.date
        const date = new Date(dateString);
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', dateOptions);

        return {
          slno: index + 1,
          AppliedDate: formattedDate,
          status: leave.myLeaves.status,
          view: (
            <div>
              <i onClick={() => handleModalClick(formattedDate, leave.myLeaves.status, leave.myLeaves.letter)} className="i-tags ms-4 fa fa-chevron-circle-right"></i>
              {isModalOpen && (
                <div className="modal">

                  <div className="modal-content">

                    <div className='d-flex justify-content-center'>
                      <h5><strong>Leave application details</strong></h5>
                    </div>

                    <div className='d-flex mt-3'>
                      <strong>Applied date :</strong>
                      <p className='ms-3'>{modalvalues.date}</p>
                    </div>

                    <div className='d-flex mt-1'>
                      <strong>Status :</strong>
                      <p className='ms-3'>{modalvalues.status}</p>
                    </div>

                    <div className='d-flex justify-content-center mt-3'>
                      <strong>Your letter</strong>
                    </div>

                    <p className='mt-1'>{modalvalues.letter}</p>
                    <button className='btn btn-success mt-4' onClick={() => setIsModalOpen(false)}>Close</button>

                  </div>

                </div>
              )}
            </div>
          )
        }

      })


    };
  };



  return (
    <div className='container'>

      <div className='d-flex flex-wrap justify-content-between align-items-center mainDiv'>

        <div className='flexItem'>

          <div className='d-flex justify-content-center align-items-center mt-3'>
            <p className='leave-leter'>Apply for leave</p>
          </div>

          <div className='d-flex justify-content-center align-items-center mt-3'>
            <textarea
              onChange={handleChange}
              value={letter.leaveLetter}
              placeholder='Type your letter here'
              className='inputLeave' type="text"
              name="leaveLetter"
              id="leaveLetter"
            />
          </div>
          {error.leaveLetter && (<p className="ms-2 text-danger">{error.leaveLetter}</p>)}

          <div className='d-flex justify-content-center align-items-center mt-3'>
            <button onClick={handleSubmit} className='btn btn-success'>Submit</button>
          </div>

        </div>

        <div>
          <div className='flexItem'>

            <div className='d-flex justify-content-center align-items-center mt-3'>
              <p className='leave-leter'>Leave history</p>
            </div>

            <div className='d-flex justify-content-center align-items-center mt-3'>
              <CDBContainer>
                <div className='container'>
                  <CDBCardBody>
                    <CDBDataTable
                      striped
                      bordered
                      hover
                      scrollX
                      data={data()}
                      materialSearch
                      entriesOptions={[3,4,5,6]}
                      entries={5} 
                    />
                  </CDBCardBody>
                </div>
              </CDBContainer>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default LeaveApplications
