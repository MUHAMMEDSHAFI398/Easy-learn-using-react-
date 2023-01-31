import React from 'react'
import './AddTeacher.css'

function AddTeachers() {
    return (
        <div>
            <div className="container border-body  ">
                <div className=" d-flex align-items-center justify-content-center">
                    <h5 className="text-decoration-underline mt-3">Add teacher</h5>
                </div>
                <form className="mt-3 mb-3" action="" method="post">
                    <div className="d-flex flex-wrap justify-content-between">

                        <div className="d-flex flex-column">
                            <input className="input-tag mt-3" required placeholder='Name' name="couponName" type="text" />
                        </div>

                        <div class="d-flex flex-column">
                            <input name="discount" required placeholder='Phone' className="input-tag mt-3" type="text" />
                        </div>

                        <div class="d-flex flex-column">
                            <input name="maxLimit" required placeholder='Email' className="input-tag mt-3" type="text" />
                        </div>


                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <input className="input-tag mt-3" required placeholder='Date of Birth' name="couponName" type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <input name="discount" required placeholder='Gender' className="input-tag mt-3" type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <input name="maxLimit" required placeholder='Salary' className="input-tag mt-3" type="text" />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <input className="input-tag mt-3" required placeholder='Qualification' name="couponName" type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <input name="discount" required placeholder='Experiance' className="input-tag mt-3" type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <input name="maxLimit" required placeholder='Remarks' className="input-tag mt-3" type="text" />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <input className="input-tag mt-3" required placeholder='House name' name="couponName" type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <input name="discount" required placeholder='Place' className="input-tag mt-3" type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <input name="maxLimit" required placeholder='Post' className="input-tag mt-3" type="text" />
                        </div>

                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-4">

                        <div className="d-flex flex-column">
                            <input className="input-tag mt-3" required placeholder='Pincode' name="couponName" type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <input name="discount" required placeholder='District' className="input-tag mt-3" type="text" />
                        </div>

                        <div className="d-flex flex-column">
                            <input name="maxLimit" required placeholder='State' className="input-tag mt-3" type="text" />
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
