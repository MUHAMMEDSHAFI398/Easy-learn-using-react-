import React from 'react'
import { CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import './StudentLeaveApplication.css'

function StudentsLeaveApplication() {


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

            // rows: leaveData.map((obj, index) => {
            //     const appliedDate = new Date(obj.myLeaves.date);
            //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
            //     const readableDate = appliedDate.toLocaleDateString('en-US', options);

            //     return {
            //         slno: index + 1,
            //         registerId: obj.registerId,
            //         name: obj.name,
            //         appliedDate: readableDate,
            //         status: obj.myLeaves.status,
            //         view: (
            //             <div>
            //                 <i onClick={() =>
            //                     handleModalClick(
            //                         readableDate, obj.myLeaves.status,
            //                         obj.myLeaves.letter, obj.registerId,
            //                         obj.myLeaves._id
            //                     )}
            //                     className="i-tags ms-4 fa fa-chevron-circle-right">

            //                 </i>
            //                 {isModalOpen && (
            //                     <div className="modals">

            //                         <div className="modal-contents">

            //                             <div className='d-flex justify-content-center'>
            //                                 <h5><strong>Leave application details</strong></h5>
            //                             </div>

            //                             <div className='d-flex mt-3'>
            //                                 <strong>Applied date :</strong>
            //                                 <p className='ms-3'>{modalvalues.date}</p>
            //                             </div>

            //                             <div className='d-flex mt-1'>
            //                                 {modalvalues.status === "Pending" ?
            //                                     <>
            //                                         <button onClick={() => handleApprove(modalvalues.registerId, modalvalues.id)} className='btn btn-success aproveRejectbtn'>Approve</button>
            //                                         <button onClick={() => handleReject(modalvalues.registerId, modalvalues.id)} className='btn btn-danger ms-3 aproveRejectbtn'>Reject</button>
            //                                     </>
            //                                     :
            //                                     <>
            //                                         <strong>Status :</strong>
            //                                         <p className='ms-3'>{modalvalues.status}</p>
            //                                     </>

            //                                 }
            //                             </div>

            //                             <div className='d-flex justify-content-center mt-3'>
            //                                 <strong>Letter</strong>
            //                             </div>

            //                             <p className='mt-1'>{modalvalues.letter}</p>
            //                             <div className='d-flex justify-content-center mt-3'>
            //                                 <button className='btn btn-success mt-4 closebtn' onClick={() => setIsModalOpen(false)}>Close</button>
            //                             </div>

            //                         </div>

            //                     </div>
            //                 )}
            //             </div>
            //         )


            //     }

            // })

        };
    };
    
  return (
    <div className='container'>

    <div className='container ParentMain'>
      <CDBContainer>
        <div className='container DivMain'>
          <div className='d-flex align-items-center justify-content-center'>
            <h5 className='headingtable'>Students</h5>
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

export default StudentsLeaveApplication
