import React, { useState, useEffect } from 'react'
import './ViewStudents.css'
import { CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { Link } from "react-router-dom";
import axios from '../../../axios';

function ViewStudents() {

  const [students, setStudents] = useState([]);
  const officeToken = localStorage.getItem("officeToken");
  

  useEffect(() => {
    axios.get('/office/students', {
      headers: {
        Authorization: officeToken
      },
    }).then((response) => {

      if (response.data.status) {
        setStudents(response.data.students);
      } else {
        console.log(response);
      }
    })
  }, [])

  const handleBlock = (id) => {

    axios.patch(`/office/block-student/${id}`,{
      headers: {      
        Authorization:officeToken
      },
    }).then(() => {
      const setStudents = students.filter((obj) => {
        if (obj._id === id) {
          obj.isBlocked = true;
        }
        return obj;
      })
      setStudents(setStudents);
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
          paarentPhone:obj.parentPhone,
          controlls: <button onClick={() => handleBlock(obj._id)} className='block-button'>Block</button>,
          view: <i className="i-tags ms-4 fa fa-chevron-circle-right"></i>

       
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















