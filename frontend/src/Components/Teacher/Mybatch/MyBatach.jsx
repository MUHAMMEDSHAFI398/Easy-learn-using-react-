import React, { useState, useEffect } from 'react'
import { getMyBatchAPI } from '../../../Services/TeacherServices'
import './MyBatch.css'


function MyBatach() {
    const [batch, setBatch] = useState([])
    const [availableSeat, setAvailableSeat] = useState('')
    const startDate = batch[0]?.startDate
    const DateStart = new Date(startDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const readableStartDate = DateStart.toLocaleDateString('en-US', options);
    useEffect(() => {
        getMyBatchAPI().then((response) => {
            if (response.data.status) {
                setBatch(response.data.batch)
                setAvailableSeat(response.data.availableSeat)
            } else {
                console.log(response)
            }
        })
    }, [])
    return (
        <div className='container'>

            <div className="container">
                <div className="d-flex flex-wrap justify-content-between">

                    <div className='child'>
                        <div className="d-flex flex-column align-items-center">
                            <h5>Batch performance</h5>
                            <h4>25%</h4>
                        </div>
                    </div>
                    <div className='child'>
                        <div className="d-flex flex-column align-items-center">
                            <h5>Avg batch attenddance</h5>
                            <h4>25%</h4>
                        </div>
                    </div>
                    <div className='child'>
                        <div className="d-flex flex-column align-items-center">
                            <h5>Fee complition rate</h5>
                            <h4>25%</h4>
                        </div>
                    </div>
                    <div className='child'>
                        <div className="d-flex flex-column align-items-center">
                            <h5>Available seat</h5>
                            <h4>{availableSeat ? availableSeat : ""}</h4>
                        </div>
                    </div>

                </div>

                <div className='batch-deatails-parent'>

                    <div className='d-flex justify-content-center'>
                        <h5 className='heading'>Details of the batch</h5>
                    </div>

                    <div className='d-flex flex-wrap '>

                        <div className='batch-deatails-child d-flex flex-column align-items-center'>
                            <p><strong>Batch</strong></p>
                            <p>{batch[0]?.registerId}</p>
                        </div>

                        <div className='batch-deatails-child d-flex flex-column align-items-center'>
                            <p><strong>Head of the batch</strong></p>
                            <p>{batch[0]?.teacher_data[0].name}</p>
                        </div>

                        <div className='batch-deatails-child d-flex flex-column align-items-center'>
                            <p><strong>Number of students</strong></p>
                            <p>{batch[0]?.batchFill}</p>
                        </div>

                        <div className='batch-deatails-child d-flex flex-column align-items-center'>
                            <p><strong>Total seat</strong></p>
                            <p>{batch[0]?.numberOfSeat}</p>
                        </div>

                        <div className='batch-deatails-child d-flex flex-column align-items-center'>
                            <p><strong>Start date</strong></p>
                            <p>{readableStartDate ? readableStartDate : ""}</p>
                        </div>

                        <div className='batch-deatails-child d-flex flex-column align-items-center'>
                            <p><strong>Duration</strong></p>
                            <p>{batch[0]?.duration}</p>
                        </div>

                        <div className='batch-deatails-child d-flex flex-column align-items-center'>
                            <p><strong>Course fee</strong></p>
                            <p>{batch[0]?.fee}</p>
                        </div>

                        <div className='batch-deatails-child d-flex flex-column align-items-center'>
                            <p><strong>Total seats</strong></p>
                            <p>{batch[0]?.numberOfSeat}</p>
                        </div>

                        <div className='batch-deatails-child d-flex flex-column align-items-center'>
                            <p><strong>Subjects</strong></p>
                            <div class="table-responsive">

                                <table class="table table-striped table-bordered">

                                    <thead>
                                        <tr>
                                            <th scope="col">SL NO</th>
                                            <th scope="col">subject</th>
                                            <th scope="col">Teacher</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            batch[0]?.subjects.map((obj, index) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{obj?.subject}</td>
                                                        <td>{obj?.teacher}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBatach
