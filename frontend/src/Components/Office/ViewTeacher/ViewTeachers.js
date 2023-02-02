import React from 'react'
import './ViewTeacher.css'
import { Link } from "react-router-dom";

function ViewTeachers() {
 
  return (
    <div>

      <div className='parent'>
        <div className='buttonTop' >
          <button className='buttonDiv'>Leave applications</button>
          <Link to="/office/add-teacher">
          <button className='buttonDiv ms-4'>Add teacher</button>
          </Link>
        </div>
        <div class="table-responsive">
          <table className="table-responsive table table-bordered table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">Teacher id</th>
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

              <tr>
                <th scope="row">1</th>
                <td>Mark zucker berg</td>
                <td>1234567899</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><button className='block-button'>Block</button></td>
                <td>
                  <Link to="/office/each-teacher">
                    <i  className="i-tags ms-4 fa fa-chevron-circle-right"></i>
                </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><button className='block-button'>Block</button></td>
                <td>
                <Link to="/office/each-teacher">
                    <i  className="i-tags ms-4 fa fa-chevron-circle-right"></i>
                </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td><button className='block-button'>Block</button></td>
                <td>
                <Link to="/office/each-teacher">
                    <i  className="i-tags ms-4 fa fa-chevron-circle-right"></i>
                </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



    </div>
  )
}

export default ViewTeachers
