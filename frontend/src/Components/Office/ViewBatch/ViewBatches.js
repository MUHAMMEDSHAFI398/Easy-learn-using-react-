import React from 'react'
import './ViewBatch.css'
import {  CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { Link } from 'react-router-dom';
function ViewBatches() {
  function testClickEvent(param) {
    alert('Row Click Event');
  }

  const data = () => {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
          width: 80,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Position',
          field: 'position',
          width: 200,
        },
        {
          label: 'Office',
          field: 'office',
          width: 200,
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Start date',
          field: 'date',
          sort: 'disabled',
          width: 150,
        },
        {
          label: 'Salary',
          field: 'salary',
          sort: 'disabled',
          width: 100,
        },
      ],
      rows: [
        {
          name: 'Tiger',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
          clickEvent: () => testClickEvent(1),
        },
        {
          name: 'Garret',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
          salary: '$170',
        },
        {
          name: 'Asht',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '66',
          date: '2009/01/12',
          salary: '$86',
        },
        {
          name: 'Cedr',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '22',
          date: '2012/03/29',
          salary: '$433',
        },
        {
          name: 'Air',
          position: 'Accountant',
          office: 'Tokyo',
          age: '33',
          date: '2008/11/28',
          salary: '$162',
        },
       
       
       
       
      ],
    };
  }; 
  return (
    <div className='container'>
      <Link to='/office/add-batch'>
        <button className='AddButton'>Add batches</button>
      </Link>
      <div className='container mt-4'>
      <CDBContainer>
      <div className='container main-div'>
        <div className='d-flex align-items-center justify-content-center'>
          <h5 className='tableHeadding'>Batches</h5>
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

export default ViewBatches