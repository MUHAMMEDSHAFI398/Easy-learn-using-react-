import React, { useEffect, useState } from 'react'
import { CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import './TeacherLeaveApplication.css'
import { leaveApplcationsAPI, leaveApproveAPI, leaveRejectAPI } from '../../../Services/OfficeServices';
import { message } from 'antd';
import Swal from 'sweetalert2'

function TeacherLeaveApplication() {


    const [leaveData, setLeaveData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalvalues, setModalValues] = useState({ date: "", status: "", letter: "", registerId: "", id: "" })


    useEffect(() => {
        leaveApplcationsAPI().then((response) => {
            setLeaveData(response.data.leaveData)
        })
    }, [])

    const handleApprove = (id, arrayElementId) => {
        Swal.fire({

            text: "Are you sure you want to approve this application  ? Once approved can not be edited later",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'Confirm'

        }).then((result) => {

            if (result.isConfirmed) {
                const data = {
                    id: id,
                    arrayElementId: arrayElementId
                }
                leaveApproveAPI(data).then((response) => {
                    if (response.data.status) {
                        const data = leaveData.filter((value) => {
                            if (value.myLeaves._id === arrayElementId) {
                                value.myLeaves.status = "Approved"
                            }
                            return value;
                        })
                        setLeaveData(data)
                        message.success('Application has been approved')
                        setIsModalOpen(false)
                    }
                })
            }
        })

    }
    const handleReject = (id, arrayElementId) => {
        Swal.fire({

            text: "Are you sure you want to reject this application ? Once Rejected can not be edited later",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'Confirm'

        }).then((result) => {
            if (result.isConfirmed) {
                const data = {
                    id: id,
                    arrayElementId: arrayElementId
                }
                leaveRejectAPI(data).then((response) => {

                    if (response.data.status) {
                        const data = leaveData.filter((value) => {
                            if (value.myLeaves._id === arrayElementId) {
                                value.myLeaves.status = "Rejected"
                            }
                            return value;
                        })
                        setLeaveData(data)
                        message.success('Application has been rejected')
                        setIsModalOpen(false)
                    }

                })
            }
        })

    }
    const handleModalClick = (date, status, letter, registerId, id) => {
        setIsModalOpen(true)
        setModalValues({ date: date, status: status, letter: letter, registerId: registerId, id: id })
    }
    const data = () => {
        return {
            columns: [
                {
                    label: 'SL NO',
                    field: 'slno',
                    width: 50,
                },
                {
                    label: 'Register id',
                    field: 'registerId',
                    width: 90,
                    attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                    },
                },
                {
                    label: 'Name',
                    field: 'name',
                    width: 200,
                },
                {
                    label: 'Applied date',
                    field: 'appliedDate',
                    width: 140,
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc',
                    width: 90,
                },

                {
                    label: 'View',
                    field: 'view',
                    sort: 'disabled',
                    width: 50,
                },
            ],

            rows: leaveData.map((obj, index) => {
                const appliedDate = new Date(obj.myLeaves.date);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const readableDate = appliedDate.toLocaleDateString('en-US', options);

                return {
                    slno: index + 1,
                    registerId: obj.registerId,
                    name: obj.name,
                    appliedDate: readableDate,
                    status: obj.myLeaves.status,
                    view: (
                        <div>
                            <i onClick={() =>
                                handleModalClick(
                                    readableDate, obj.myLeaves.status,
                                    obj.myLeaves.letter, obj.registerId,
                                    obj.myLeaves._id
                                )}
                                className="i-tags ms-4 fa fa-chevron-circle-right">

                            </i>
                            {isModalOpen && (
                                <div className="modals">

                                    <div className="modal-contents">

                                        <div className='d-flex justify-content-center'>
                                            <h5><strong>Leave application details</strong></h5>
                                        </div>

                                        <div className='d-flex mt-3'>
                                            <strong>Applied date :</strong>
                                            <p className='ms-3'>{modalvalues.date}</p>
                                        </div>

                                        <div className='d-flex mt-1'>
                                            {modalvalues.status === "Pending" ?
                                                <>
                                                    <button onClick={() => handleApprove(modalvalues.registerId, modalvalues.id)} className='btn btn-success aproveRejectbtn'>Approve</button>
                                                    <button onClick={() => handleReject(modalvalues.registerId, modalvalues.id)} className='btn btn-danger ms-3 aproveRejectbtn'>Reject</button>
                                                </>
                                                :
                                                <>
                                                    <strong>Status :</strong>
                                                    <p className='ms-3'>{modalvalues.status}</p>
                                                </>

                                            }
                                        </div>

                                        <div className='d-flex justify-content-center mt-3'>
                                            <strong>Letter</strong>
                                        </div>

                                        <p className='mt-1'>{modalvalues.letter}</p>
                                        <div className='d-flex justify-content-center mt-3'>
                                            <button className='btn btn-success mt-4 closebtn' onClick={() => setIsModalOpen(false)}>Close</button>
                                        </div>

                                    </div>

                                </div>
                            )}
                        </div>
                    )


                }

            })

        };
    };
    return (
        <div className='container'>
            <div className='container mt-4'>
                <CDBContainer>
                    <div className='container mains-div'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <h5 className='headTable'>Teachers leave applicatons</h5>
                        </div>
                        <CDBCardBody>
                            <CDBDataTable
                                striped
                                bordered
                                hover
                                scrollX
                                data={data()}
                                materialSearch
                                entriesOptions={[5, 10, 15, 20, 25]}

                            />
                        </CDBCardBody>
                    </div>
                </CDBContainer>
            </div>
        </div>
    )
}

export default TeacherLeaveApplication
