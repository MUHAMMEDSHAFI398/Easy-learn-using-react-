import React from 'react'
import './EachTeacher.css'

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';


function EachTeachers() {
  return (
    <div>
      <div className='container parent'>
        <section style={{ backgroundColor: 'rgb(244, 243, 242)' }}>
          <MDBContainer className="py-5">


            <MDBRow>
              <MDBCol lg="4">

                <MDBCard className="mb-4">
                  <div className='borderDiv'>
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '150px' }}
                        fluid />
                      <p className="text-muted mb-1">Teacher name</p>
                      <p className="text-muted mb-4">Teacher id</p>
                      <div className="d-flex justify-content-center mb-2">
                        <MDBBtn>Block</MDBBtn>

                      </div>
                    </MDBCardBody>
                  </div>
                </MDBCard>



                <MDBCard className="mb-4 mb-lg-0">
                  <div className='borderDiv'>
                    <MDBCardBody className="p-0">
                      <MDBListGroup flush className="rounded-3">
                        <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                          <MDBCardText><h5>Quick contact</h5></MDBCardText>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                          <MDBIcon fas icon="envelope" style={{ color: '#55acee' }} />
                          <MDBCardText>mdbootstrap</MDBCardText>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                          <MDBIcon fas icon="phone-alt" style={{ color: '#55acee' }} />
                          <MDBCardText>@mdbootstrap</MDBCardText>
                        </MDBListGroupItem>

                      </MDBListGroup>
                    </MDBCardBody>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <div className='borderDiv'>

                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Batch</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Date of birth</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">example@example.com</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Gender</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Quallification</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Experiance</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Salary</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">example@example.com</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Address</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">example@example.com</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </div>
                </MDBCard>

                <MDBRow>

                  <div className="container mb-5 borderDiv  rounded-3 ">
                    <div className=" d-flex align-items-center justify-content-center mt-3">
                      <h5 className="text-decoration-underline">Edit teacher details</h5>
                    </div>

                    <form className="mt-3 mb-3" action="/admin/addCoupon" method="post">
                      <div className="d-flex flex-wrap justify-content-between">

                        <div className="d-flex flex-column">

                          <input className="inputdiv rounded-3" placeholder='Salary' required name="couponName" type="text" />
                        </div>

                        <div className="d-flex flex-column">

                          <input name="discount" required placeholder='Experiance' className="inputdiv mt-4 rounded-3" type="text" />
                        </div>

                        <button className="submitButton btn btn-success mt-4" type="submit">Submit</button>

                      </div>

                    </form>

                  </div>


                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </div>
  )
}

export default EachTeachers
