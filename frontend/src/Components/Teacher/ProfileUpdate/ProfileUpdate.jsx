import React, { useEffect, useState } from 'react'
import './profileUpdate.css'
import { useSelector } from 'react-redux';
import validate from './validate'

function ProfileUpdate() {
    const initialVlaues = { address: {}, phone: "", email: "" }
    const [teacherData, setTeacherData] = useState(initialVlaues)
    const [error, setErrors] = useState({})

    const details = useSelector(state => state.teacherData.teacherData)
    useEffect(() => {
        setTeacherData(details);
    }, [details]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeacherData({ ...teacherData, [name]: value });

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate(teacherData);
        if (Object.keys(errors).length !== 0) {
            setErrors(errors);
        } else {
        }
    }

    return (

        <div className="container border-line">

            <div className=" d-flex align-items-center justify-content-center">
                <h5 className="text-decoration-underline mt-4 mb-5 ">Update profile</h5>
            </div>

            <form className=" mb-3" onSubmit={handleSubmit}>

                <div className="d-flex flex-wrap justify-content-between">
                    <div className="d-flex flex-column">
                        <label className='ms-2 mt-3'>Phone</label>
                        <input
                            onChange={handleChange}
                            value={teacherData?.phone}
                            name="phone"
                            className="input-tags"
                            id='name'
                            type="number"
                        />
                        {error.phone && (<p className="ms-2 text-danger">{error.phone}</p>)}
                    </div>
                    <div class="d-flex flex-column">
                        <label className='ms-2 mt-3'>Email</label>
                        <input
                            onChange={handleChange}
                            value={teacherData.email}
                            name="email"
                            className="input-tags"
                            type="string"
                        />
                    </div>
                    <div class="d-flex flex-column">
                        <label className='ms-2 mt-3'>House name</label>
                        <input
                            onChange={handleChange}
                            value={teacherData?.address?.house_name}
                            name="address.house_name"
                            className="input-tags"
                            type="text"
                        />
                    </div>
                    <div class="d-flex flex-column">
                        <label className='ms-2 mt-3'>Place</label>
                        <input
                            onChange={handleChange}
                            value={teacherData?.address?.place}
                            name="place"
                            className="input-tags"
                            type="text"
                        />
                    </div>
                </div>

                <div className="d-flex flex-wrap justify-content-between mt-5 ">
                    <div className="d-flex flex-column">
                        <label className='ms-2 mt-3'>Post</label>
                        <input
                            onChange={handleChange}
                            value={teacherData?.address?.post}
                            name="post"
                            className="input-tags"
                            id='name'
                            type="text"
                        />
                    </div>
                    <div class="d-flex flex-column">
                        <label className='ms-2 mt-3'>Pin code</label>
                        <input
                            onChange={handleChange}
                            value={teacherData?.address?.pin}
                            name="pin"
                            className="input-tags"
                            type="number"
                        />
                    </div>
                    <div class="d-flex flex-column">
                        <label className='ms-2 mt-3'>District</label>
                        <input
                            onChange={handleChange}
                            value={teacherData?.address?.district}
                            name="district"
                            className="input-tags"
                            type="text"
                        />
                    </div>
                    <div class="d-flex flex-column">
                        <label className='ms-2 mt-3'>State</label>
                        <input
                            onChange={handleChange}
                            value={teacherData?.address?.state}
                            name="state"
                            className="input-tags"
                            type="text"
                        />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center mt-5 mb-5">
                    <div className="d-flex flex-column">
                        <button className='btn btn-success rounded-3' type='submit'>Submit</button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default ProfileUpdate

