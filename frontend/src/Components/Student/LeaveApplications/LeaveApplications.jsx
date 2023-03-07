import React from 'react'
import { CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';

function LeaveApplications() {
    return (
        <div className='container'>

            <div className='d-flex flex-wrap justify-content-between align-items-center mainDiv'>

                <div className='flexItem'>

                    <div className='d-flex justify-content-center align-items-center mt-3'>
                        <p className='leave-leter'>Apply for leave</p>
                    </div>

                    <div className='d-flex justify-content-center align-items-center mt-3'>
                        <textarea
                            // onChange={handleChange}
                            // value={letter.leaveLetter}
                            placeholder='Type your letter here'
                            className='inputLeave' type="text"
                            name="leaveLetter"
                            id="leaveLetter"
                        />
                    </div>
                    {/* {error.leaveLetter && (<p className="ms-2 text-danger">{error.leaveLetter}</p>)} */}

                    <div className='d-flex justify-content-center align-items-center mt-3'>
                        <button className='btn btn-success'>Submit</button>
                    </div>

                </div>

                <div>
                    <div className='flexItem'>

                        <div className='d-flex justify-content-center align-items-center mt-3'>
                            <p className='leave-leter'>Leave history</p>
                        </div>

                        <div className='d-flex justify-content-center align-items-center mt-3'>
                            <CDBContainer>
                                <div className='container'>
                                    <CDBCardBody>
                                        <CDBDataTable
                                            striped
                                            bordered
                                            hover
                                            scrollX
                                            // data={data()}
                                            materialSearch
                                            entriesOptions={[3, 4, 5, 6]}
                                            entries={5}
                                        />
                                    </CDBCardBody>
                                </div>
                            </CDBContainer>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default LeaveApplications
