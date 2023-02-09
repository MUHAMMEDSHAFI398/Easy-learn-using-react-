import React,{useEffect,useState} from 'react'
import './AddStudent.css'
import axios from '../../../axios'

function AddStudents() {

  const token = localStorage.getItem("token");
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    axios.get('/office/batches',{
      headers: {      
        Authorization:token
      },
    }).then((response) => {
      if (response.data.status) {
        setBatches(response.data.batches);
      
      } else {
        console.log(response);
      }
    })
  },[])
  console.log(batches)

  return (
    <div className='container'>
    <div className="container border-body">
        <div className=" d-flex align-items-center justify-content-center">
            <h5 className="text-decoration-underline ">Add student</h5>
        </div>
        <form className=" mb-3" >
            <div className="d-flex flex-wrap justify-content-between">

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Name</label>
                    <input
                        // value={formValues.name}
                        // onChange={onChangeHandle}
                        name="name"
                        className="input-tag "
                        required id='name'
                        type="text"
                    />
                </div>

                <div class="d-flex flex-column">
                    <label className='ms-4 mt-3'>Phone</label>
                    <input
                        // value={formValues.phone}
                        // onChange={onChangeHandle}
                        name="phone"
                        required className="input-tag "
                        type="number"
                    />
                </div>

                <div class="d-flex flex-column">
                    <label className='ms-4 mt-3'>Email</label>
                    <input
                        // value={formValues.email}
                        // onChange={onChangeHandle}
                        name="email" required
                        className="input-tag "
                        type="text"
                    />
                </div>


            </div>
            <div className="d-flex flex-wrap justify-content-between mt-4">

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Date of birth</label>
                    <input
                        // value={formValues.date_of_birth}
                        // onChange={onChangeHandle}
                        name="date_of_birth"
                        className="input-tag "
                        required type="date"
                    />
                </div>

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Gender</label>
                    <input
                        // value={formValues.gender}
                        // onChange={onChangeHandle}
                        name="gender"
                        required className="input-tag "
                        type="text"
                    />
                </div>

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Parent name</label>
                    <input
                        // value={formValues.salary}
                        // onChange={onChangeHandle}
                        name="parentName"
                        required className="input-tag "
                        type="number"
                    />
                </div>

            </div>
            <div className="d-flex flex-wrap justify-content-between mt-4">

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Parent phone</label>
                    <input
                        // value={formValues.qualification}
                        // onChange={onChangeHandle}
                        name="parentPhone"
                        className="input-tag "
                        required type="text"
                    />
                </div>

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Educaton</label>
                    <input
                        // value={formValues.experience}
                        // onChange={onChangeHandle}
                        name="experience"
                        required className="input-tag "
                        type="number"
                    />
                </div>

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Last studied institute</label>
                    <input
                        // value={formValues.remarks}
                        // onChange={onChangeHandle}
                        name="remarks"
                        required className="input-tag "
                        type="text"
                    />
                </div>

            </div>
            <div className="d-flex flex-wrap justify-content-center mt-4">
            <div className="d-flex flex-column">
            <label className='ms-4 mt-3'>Batch</label>
            <select className="input-tag" id="">
            <option selected disabled value=''>Batch</option>

            {
                  batches.map((obj)=>{
                    return(
                      <option value={obj.registerId}>{obj.registerId}</option>
                    )
                  })
                }
            </select>

            </div>           
            </div>
            <div className="d-flex flex-wrap justify-content-between mt-4">

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>House name</label>
                    <input
                        // value={formValues.house_name}
                        // onChange={onChangeHandle}
                        name="house_name"
                        className="input-tag "
                        required type="text"
                    />
                </div>

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Place</label>
                    <input
                        // value={formValues.place}
                        // onChange={onChangeHandle}
                        name="place"
                        required
                        className="input-tag "
                        type="text"
                    />
                </div>

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Post</label>
                    <input
                        // value={formValues.post}
                        // onChange={onChangeHandle}
                        name="post"
                        required
                        className="input-tag "
                        type="text"
                    />
                </div>

            </div>
            <div className="d-flex flex-wrap justify-content-between mt-4">

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>Pincode</label>
                    <input
                        // value={formValues.pin}
                        // onChange={onChangeHandle}
                        name="pin"
                        className="input-tag "
                        required type="number"
                    />
                </div>

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>District</label>
                    <input
                        // value={formValues.district}
                        // onChange={onChangeHandle}
                        name="district" required
                        className="input-tag "
                        type="text"
                    />
                </div>

                <div className="d-flex flex-column">
                    <label className='ms-4 mt-3'>State</label>
                    <input
                        // value={formValues.state}
                        // onChange={onChangeHandle}
                        name="state"
                        required className="input-tag "
                        type="text"
                    />
                </div>

            </div>
            <div className="d-flex flex-wrap justify-content-center mt-4">
                <div className='imagedisplay'></div>
            </div>

            <div className="d-flex flex-wrap justify-content-center mt-2">

                <div className="d-flex flex-column">
                    <input
                        
                        name='file'
                        // onChange={handleFileChange}
                        className="input-tag form-control"
                        type="file" id="formFile"
                    />
                </div>

            </div>
            <div className="d-flex flex-wrap justify-content-center mt-2">

                <div className="d-flex flex-column">
                    <button className='btn btn-success rounded-3' type='submit'>Submit</button>
                </div>

            </div>

        </form>
    </div>
</div>
  )
}

export default AddStudents
