import React, { useEffect } from 'react'
import { CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import './TeacherLeaveApplication.css'
import { leaveApplcationsAPI } from '../../../Services/OfficeServices';

function TeacherLeaveApplication() {
   useEffect(()=>{
      leaveApplcationsAPI().then((response)=>{
        console.log(response.data)
      })
   })
    const data = () => {
        return {
          columns: [
            {
              label: 'SL NO',
              field: 'slno',
              width: 50,
            },
            {
              label: 'Register id', 
              field: 'registerId',
              width: 80,
              attributes: {           
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
              },
            },
            {
              label: 'Head of the batch',
              field: 'headOfTheBatch',
              width: 200,
            },
            {
              label: 'Start date',
              field: 'startDate',
              width: 200,
            },
            {
              label: 'Duration',
              field: 'duration',
              sort: 'asc',
              width: 100,
            },
            {
              label: 'Number of seats',
              field: 'status',
              sort: 'disabled',
              width: 150,
            },
    
            {
              label: 'View',
              field: 'view',
              sort: 'disabled',
              width: 100,
            },
          ],
    
        };
      };
  return (
    <div className='container'>
      <div className='container mt-4'>
        <CDBContainer>
          <div className='container mains-div'>
            <div className='d-flex align-items-center justify-content-center'>
              <h5 className='headTable'>Teachers leave applicatons</h5>
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

export default TeacherLeaveApplication
