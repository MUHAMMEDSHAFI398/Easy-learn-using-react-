import React from 'react'
import './ViewTeacher.css'


function ViewTeachers() {
  return (
    <div>

      <div className='parent'>
        <div className='buttonTop' >
          <button className='button'>Leave applications</button>
          <button className='button ms-4'>Add teacher</button>
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
            <td><i className="ms-4 fa fa-chevron-circle-right"></i></td>
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
            <td><i className="ms-4 fa fa-chevron-circle-right"></i></td>
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
            <td><i className="ms-4 fa fa-chevron-circle-right"></i></td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>

     
 
    </div>
  )
}

export default ViewTeachers
