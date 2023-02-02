import React,{useState} from 'react'
import './AddTeacher.css'
import { useNavigate } from "react-router-dom";
import axios from '../../../axios'


function AddTeachers() {
    const initialVlaues = {
        name: "", phone: "", email: "", date_of_birth: "", gender: "",
        salary: "", qualification: "", experiance: "", remarks: "",
        house_name: "", place: "", post: "", district: "", state: ""
    };
    const [formValues, setFormValues] = useState(initialVlaues);
    return (
        <div>
            <div className="container border-body parent ">
                <div className=" d-flex align-items-center justify-content-center">
                    <h5 className="text-decoration-underline ">Add teacher</h5>
                </div>
                <form className=" mb-3" action="" method="post">
                    <div className="d-flex flex-wrap justify-content-between">

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Name</label>
                            <input name="name" className="input-tag " required id='name' type="text" />
                        </div>

                        <div class="d-flex flex-column">
                            <label className='ms-4 mt-3'>Phone</label>
                            <input name="phone" required className="input-tag " type="text" />
                        </div>

                        <div class="d-flex flex-column">
                            <label className='ms-4 mt-3'>Email</label>
                            <input name="email" required className="input-tag " type="text" />
                        </div>


                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Date of birth</label>
                            <input name="date_of_birth" className="input-tag " required type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Gender</label>
                            <input name="gender" required className="input-tag " type="number" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Salary</label>
                            <input name="salary" required className="input-tag " type="text" />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Qualification</label>
                            <input name="qualification" className="input-tag " required type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Experiance</label>
                            <input name="experiance" required className="input-tag " type="number" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Remarks</label>
                            <input name="remarks" required className="input-tag " type="text" />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>House name</label>
                            <input name="house_name" className="input-tag " required type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Place</label>
                            <input name="place" required className="input-tag " type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Post</label>
                            <input name="post" required className="input-tag " type="text" />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Pincode</label>
                            <input name="pin" className="input-tag " required type="number" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>District</label>
                            <input name="district" required className="input-tag " type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>State</label>
                            <input name="state" required className="input-tag " type="text" />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-center mt-4">
                        <div className='imagedisplay'></div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-center mt-2">

                        <div className="d-flex flex-column">
                            <input className="input-tag form-control" type="file" id="formFile" />
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddTeachers
