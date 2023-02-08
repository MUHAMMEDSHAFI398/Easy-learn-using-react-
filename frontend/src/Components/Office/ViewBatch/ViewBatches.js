import React,{useEffect,useState} from 'react'
import './ViewBatch.css'
import {  CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import { Link } from 'react-router-dom';
import axios from '../../../axios';


function ViewBatches() {
  const[batches,setBatches]=useState([])
  console.log(batches)
  useEffect(()=>{
    axios.get('/office/batches').then((response) => {
      if (response.data.status) {
        setBatches(response.data.batches); 
           
      } else {
        console.log(response);
      }
    })
  },[])
  // function testClickEvent(param) {
  //   alert('Row Click Event');
  // }

  const data = () => {
    return {
      columns: [
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
      rows:batches.map((batch)=>{
        let startDate=new Date(batch.startDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const readableDate = startDate.toLocaleDateString('en-US', options);
        return {
          registerId: batch.registerId,
          headOfTheBatch: batch.teacher_data[0].name,
          startDate: readableDate,
          duration: `${batch.duration} month`,
          status: batch.numberOfSeat,
          view: <Link to='/office/each-batch'><i className="i-tags ms-4 fa fa-chevron-circle-right"></i></Link>
               
          // clickEvent: () => testClickEvent(1),
        }
      })
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