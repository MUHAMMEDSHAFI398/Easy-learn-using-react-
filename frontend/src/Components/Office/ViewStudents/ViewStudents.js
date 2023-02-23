import React, { useState, useEffect } from 'react'
import { message } from 'antd'
import './ViewStudents.css'
import { CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { Link, useNavigate } from "react-router-dom";
import axios from '../../../axios';
import Swal from 'sweetalert2'
import { getstudentsAPI, blockStudentAPI, unBlockStudentAPI, handleGetStudentAPI } from '../../../Services/OfficeServices';

function ViewStudents() {

  const [students, setStudents] = useState([]);
  const officeToken = localStorage.getItem('officeToken')
  const navigate = useNavigate()

  useEffect(() => {
    getstudentsAPI().then((response) => {

      if (response.data.status) {
        setStudents(response.data.students);
      } else {
        console.log(response);
      }
    })
  }, [])

  const handleBlock = async (id) => {


    Swal.fire({
      text: "Are you sure you want to block this student?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes'

    }).then((result) => {
      if (result.isConfirmed) {
        blockStudentAPI(id).then(() => {
          const setStudent = students.filter((obj) => {
            if (obj._id === id) {
              obj.isBlocked = true;
            }
            return obj;
          })
          message.success("The student has been blocked")
          setStudents(setStudent);
        })
      }

    })
  }





  const handleUnBlock = async (id) => {

    Swal.fire({

      text: "Are you sure you want to Un block this student?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes'

    }).then((result) => {

      if (result.isConfirmed) {
        unBlockStudentAPI(id).then(() => {
          const setStudent = students.filter((obj) => {
            if (obj._id === id) {
              obj.isBlocked = false;
            }
            return obj;
          })
          message.success("The student has been Un blocked")
          setStudents(setStudent);
        })
      }
    })
  }

  const handleClick = async (id) => {

    handleGetStudentAPI(id).then((response) => {
      if (response.data.status) {
        navigate('/office/each-student', {
          state: {
            studentData: response.data.studentData
          }
        });
      }
    })
  }


  const data = () => {
    return {
      columns: [
        {
          label: 'SL NO',
          field: 'slno',
          width: 60,
        },
        {
          label: 'Register Id',
          field: 'registerId',
          width: 80,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Name',
          field: 'name',
          width: 200,
        },
        {
          label: 'Phone',
          field: 'phone',
          width: 130,
        },
        {
          label: 'Batch',
          field: 'batch',
          sort: 'disabled',
          width: 80,
        },

        {
          label: 'Parent Contact',
          field: 'paarentPhone',
          sort: 'disabled',
          width: 130,
        },
        {
          label: 'Controlls',
          field: 'controlls',
          sort: 'disabled',
          width: 100,
        },
        {
          label: 'View',
          field: 'view',
          sort: 'disabled',
          width: 80,
        },
      ],
      rows: students.map((obj, index) => {

        return {
          slno: index + 1,
          registerId: obj.registerId,
          name: obj.name,
          phone: obj.phone,
          batch: obj.batch,
          paarentPhone: obj.parentPhone,
          controlls:
            obj.isBlocked === false ?
              <button onClick={() => handleBlock(obj._id)} className='block-button'>Block</button>
              :
              <button onClick={() => handleUnBlock(obj._id)} className='unblock-button'>Un block</button>,

          view: <i onClick={() => handleClick(obj._id)} className="i-tags ms-4 fa fa-chevron-circle-right"></i>


        }

      })
    };
  };
  return (
    <div className='container'>
      <Link to='/office/add-student'>
        <button className='AddButton'>Add student</button>
      </Link>
      <div className='container mt-4'>
        <CDBContainer>
          <div className='container main-div'>
            <div className='d-flex align-items-center justify-content-center'>
              <h5 className='tableHeadding'>All students</h5>
            </div>
            <CDBCardBody>
              <CDBDataTable
                striped
                bordered
                hover
                scrollX
                data={data()}
                materialSearch
                entriesOptions={[5, 10, 15, 20, 25]}

              />
            </CDBCardBody>
          </div>
        </CDBContainer>
      </div>
    </div>
  )
}

export default ViewStudents















