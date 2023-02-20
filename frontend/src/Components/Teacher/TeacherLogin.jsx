import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';
import './TeacherLogin.css'
function TeacherLogin() {
    return (

        <div className='border-login container  mb-5 '  >
            <MDBContainer fluid className="p-3 my-5 h-custom">
                <MDBRow>
                    <MDBCol col='10' md='6'>
                        <img className='image' src="/images/girl-1.png" alt="couldn't load " />
                    </MDBCol>
                    <MDBCol col='4' md='6'>
                        <div className='border-login ' >
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                <h1 className="mb-5 mt-3">Login</h1>
                            </div>

                            <form >
                                <MDBInput

                                    wrapperClass='mb-4 ms-4 me-4'
                                    className='input' name='email'
                                    label='Register id' id='formControlLg'
                                    type='email' size="lg"
                                />

                                <MDBInput wrapperClass='mb-4 ms-4 me-4'
                                    className='input' name='password'
                                    label='Password (DOB)' id='formControlLg'
                                    type='date' size="lg"
                                    max={new Date().toISOString().split("T")[0]}
                                />

                                <MDBInput className='submit-login btn btn-success'
                                    wrapperClass='mb-4 ms-4 me-4'
                                    type='submit' value='Login'
                                    id='formControlLg' size="lg"
                                />
                            </form>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

    )
}

export default TeacherLogin
