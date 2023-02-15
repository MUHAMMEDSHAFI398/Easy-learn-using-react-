import React, { useEffect, useState } from 'react'
import './AddStudent.css'
import axios from '../../../axios'
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

function AddStudents() {

    const initialVlaues = {
        name: "", phone: "", email: "", dateOfBirth: "", gender: "",
        parentName: "", parentPhone: "", education: "", institute: "", batch: "",
        house_name: "", place: "", post: "", pin: "", district: "", state: "", file: null
    };

    const [batches, setBatches] = useState([]);

    const [formValues, setFormValues] = useState(initialVlaues);
    const navigate = useNavigate();
    const officeToken = localStorage.getItem("officeToken");

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

    useEffect(() => {
        axios.get('/office/batches', {
            headers: {
                Authorization: officeToken
            },
        }).then((response) => {
            if (response.data.status) {
                setBatches(response.data.batches);

            } else {
                console.log(response);
            }
        })
    }, [])

    const handleSubmit = (event) => {

        event.preventDefault();

        const data = new FormData();

        data.append("name", formValues.name);
        data.append("phone", formValues.phone);
        data.append("email", formValues.email);
        data.append("dateOfBirth", formValues.dateOfBirth);
        data.append("gender", formValues.gender);
        data.append("parentName", formValues.parentName);
        data.append("parentPhone", formValues.parentPhone);
        data.append("education", formValues.education);
        data.append("institute", formValues.institute);
        data.append("batch", formValues.batch);
        data.append("house_name", formValues.house_name);
        data.append("place", formValues.place);
        data.append("post", formValues.post);
        data.append("pin", formValues.pin);
        data.append("district", formValues.district);
        data.append("state", formValues.state);
        data.append("file", formValues.file);


        axios.post('/office/add-student', data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: officeToken
                },
            }
        ).then(() => {
            message.success('Successfully added new student')
            navigate('/office/students');

        }).catch((error) => {
            console.log(error);

        })
    }


    return (
        <div className='container'>
            <div className="container border-body">
                <div className=" d-flex align-items-center justify-content-center">
                    <h5 className="text-decoration-underline ">Add student</h5>
                </div>
                <form className=" mb-3" onSubmit={handleSubmit} >
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
                                value={formValues.dateOfBirth}
                                onChange={onChangeHandle}
                                name="dateOfBirth"
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
                            <label className='ms-4 mt-3'>Parent name</label>
                            <input
                                value={formValues.parentName}
                                onChange={onChangeHandle}
                                name="parentName"
                                required className="input-tag "
                                type="text"
                            />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Parent phone</label>
                            <input
                                value={formValues.parentPhone}
                                onChange={onChangeHandle}
                                name="parentPhone"
                                className="input-tag "
                                required type="number"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Educaton</label>
                            <input
                                value={formValues.education}
                                onChange={onChangeHandle}
                                name="education"
                                required className="input-tag "
                                type="text"
                            />
                        </div>

                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Last studied institute</label>
                            <input
                                value={formValues.institute}
                                onChange={onChangeHandle}
                                name="institute"
                                required className="input-tag "
                                type="text"
                            />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-center mt-4">
                        <div className="d-flex flex-column">
                            <label className='ms-4 mt-3'>Batch</label>
                            <select
                                value={formValues.batch}
                                onChange={onChangeHandle}
                                name='batch' className="input-tag"
                                id="batch"
                            >
                                <option defaultValue disabled value=''>Batch</option>

                                {
                                    batches.map((obj) => {
                                        return (
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

export default AddStudents
