import React, { useEffect, useState } from 'react'
import './ViewTeacher.css'
import axios from '../../../axios'
import { Link, useNavigate } from "react-router-dom";

function ViewTeachers() {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();
  const officeToken = localStorage.getItem("officeToken");
 

  useEffect(() => {
    axios.get('/office/teachers',{
      headers: {      
        Authorization:officeToken
      },
    }).then((response) => {
      if (response.data.status) {
        setTeachers(response.data.teachers);
      } else {
        console.log(response);
      }
    })
  },[])


  const handleClick = async (id) => {
    axios.get(`/office/get-teacher/${id}`,{
      headers: {      
        Authorization:officeToken
      },
    }).then((response) => {
      if (response.data.status) {
        navigate('/office/each-teacher', {
          state: {
            teacher: response.data.teacher
          }
        });
      }
    })
  }
  const handleBlock = (id) => {

    axios.get(`/office/block-teacher/${id}`,{
      headers: {      
        Authorization:officeToken
      },
    }).then(() => {
      const setTeacher = teachers.filter((value) => {
        if (value._id === id) {
          value.isBlocked = true
        }
        return value;
      })
      setTeachers(setTeacher);
    })
  }

  const handleUnBlock = (id) => {

    axios.get(`/office/unblock-teacher/${id}`,{
      headers: {      
        Authorization:officeToken
      },
    }).then(() => {
      const setTeacher = teachers.filter((value) => {
        if (value._id === id) {
          value.isBlocked = false
        }
        return value;
      })
      setTeachers(setTeacher);
    })
  }

  return (
    <div className='container' >

      <div className='container'>
        <div className='buttonTop' >
          <button className='buttonDiv'>Leave applications</button>
          <Link to="/office/add-teacher">
            <button className='buttonDiv ms-4'>Add teacher</button>
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table-responsive table table-bordered table-striped mt-5">
            <thead>

              <tr>
                <th scope="col">SL NO</th>
                <th scope="col">Register id</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Batch</th>
                <th scope="col">Salary</th>
                <th scope="col">Qualification</th>
                <th scope="col">Experiance</th>
                <th scope="col">Controlls</th>
                <th scope="col">View profile</th>
              </tr>

            </thead>

            <tbody>
              {
                teachers.map((obj, index) => {

                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{obj.registerId}</td>
                      <td>{obj.name}</td>
                      <td>{obj.phone}</td>
                      <td>batch</td>
                      <td>{obj.salary}</td>
                      <td>{obj.qualification}</td>
                      <td>{obj.experience}</td>
                      <td>
                        {obj.isBlocked === false ?
                          <button onClick={() => handleBlock(obj._id)} className='block-button'>Block</button> :
                          <button onClick={() => handleUnBlock(obj._id)} className='unblock-button'>Un block</button>
                        }
                      </td>
                      <td>
                        <i onClick={() => handleClick(obj._id)} className="i-tags ms-4 fa fa-chevron-circle-right"></i>
                      </td>
                    </tr>
                  )

                })

              }
            </tbody>
          </table>
        </div>
      </div>



    </div>
  )
}

export default ViewTeachers




