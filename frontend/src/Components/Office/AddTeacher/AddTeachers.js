import React, { useState } from 'react'
import './AddTeacher.css'
import { useNavigate } from "react-router-dom";
import axios from '../../../axios'


function AddTeachers() {
    const initialVlaues = {
        name: "", phone: "", email: "", date_of_birth: "", gender: "",
        salary: "", qualification: "", experience: "", remarks: "",
        house_name: "", place: "", post: "", pin: "", district: "", state: "", file: null
    };
    const [formValues, setFormValues] = useState(initialVlaues);
    const navigate = useNavigate();


    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    };
    const handleFileChange = event => {
        setFormValues({
            ...formValues,
            file: event.target.files[0]
        });
    };


    const handleSubmit = (event) => {

        event.preventDefault();

        const data = new FormData();

        data.append("name", formValues.name);
        data.append("phone", formValues.phone);
        data.append("email", formValues.email);
        data.append("date_of_birth", formValues.date_of_birth);
        data.append("gender", formValues.gender);
        data.append("salary", formValues.salary);
        data.append("qualification", formValues.qualification);
        data.append("experience", formValues.experience);
        data.append("remarks", formValues.remarks);
        data.append("house_name", formValues.house_name);
        data.append("place", formValues.place);
        data.append("post", formValues.post);
        data.append("pin", formValues.pin);
        data.append("district", formValues.district);
        data.append("state", formValues.state);
        data.append("file", formValues.file);


        axios.post('/office/add-teacher', data,
        {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        ).then((response) => {
            console.log(response.data);
            navigate('/office/teachers');

        }).catch((error) => {
            console.log(error);

        })
    }



    return (
        <div className='container'>
            <div className="container border-body  ">
                <div className=" d-flex align-items-center justify-content-center">
                    <h5 className="text-decoration-underline ">Add teacher</h5>
                </div>
                <form className=" mb-3" onSubmit={handleSubmit}>
                    <div className="d-flex flex-wrap justify-content-between">

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Name</label>
                            <input
                                value={formValues.name}
                                onChange={onChangeHandle}
                                name="name"
                                className="input-tag "
                                required id='name'
                                type="text"
                            />
                        </div>

                        <div class="d-flex flex-column">
                            <label className='ms-4 mt-3'>Phone</label>
                            <input
                                value={formValues.phone}
                                onChange={onChangeHandle}
                                name="phone"
                                required className="input-tag "
                                type="number"
                            />
                        </div>

                        <div class="d-flex flex-column">
                            <label className='ms-4 mt-3'>Email</label>
                            <input
                                value={formValues.email}
                                onChange={onChangeHandle}
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
                                value={formValues.date_of_birth}
                                onChange={onChangeHandle}
                                name="date_of_birth"
                                className="input-tag "
                                required type="date"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Gender</label>
                            <input
                                value={formValues.gender}
                                onChange={onChangeHandle}
                                name="gender"
                                required className="input-tag "
                                type="text"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Salary</label>
                            <input
                                value={formValues.salary}
                                onChange={onChangeHandle}
                                name="salary"
                                required className="input-tag "
                                type="number"
                            />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Qualification</label>
                            <input
                                value={formValues.qualification}
                                onChange={onChangeHandle}
                                name="qualification"
                                className="input-tag "
                                required type="text"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Experiance</label>
                            <input
                                value={formValues.experience}
                                onChange={onChangeHandle}
                                name="experience"
                                required className="input-tag "
                                type="number"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Remarks</label>
                            <input
                                value={formValues.remarks}
                                onChange={onChangeHandle}
                                name="remarks"
                                required className="input-tag "
                                type="text"
                            />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>House name</label>
                            <input
                                value={formValues.house_name}
                                onChange={onChangeHandle}
                                name="house_name"
                                className="input-tag "
                                required type="text"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Place</label>
                            <input
                                value={formValues.place}
                                onChange={onChangeHandle}
                                name="place"
                                required
                                className="input-tag "
                                type="text"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Post</label>
                            <input
                                value={formValues.post}
                                onChange={onChangeHandle}
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
                                value={formValues.pin}
                                onChange={onChangeHandle}
                                name="pin"
                                className="input-tag "
                                required type="number"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>District</label>
                            <input
                                value={formValues.district}
                                onChange={onChangeHandle}
                                name="district" required
                                className="input-tag "
                                type="text"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>State</label>
                            <input
                                value={formValues.state}
                                onChange={onChangeHandle}
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
                                onChange={handleFileChange}
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

export default AddTeachers
