import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';
import './Body.css'


function Body() {
  return (

    <div className='border-login container  mb-5 '  >
      <MDBContainer fluid className="p-3 my-5 h-custom">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img className='image' src="images/girl-1.png" alt="" />
          </MDBCol>

          <MDBCol col='4' md='6'>

            <div className='border-login ' >

              <div className="d-flex flex-row align-items-center justify-content-center">
                <h1 className="hi mb-5 mt-3">Login</h1>

              </div>


              <MDBInput wrapperClass='mb-4 ms-4 me-4' className='input' label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 ms-4 me-4' className='input' label='Password' id='formControlLg' type='password' size="lg" />
              <MDBInput  className='submit-btn' wrapperClass='mb-4 ms-4 me-4' type='submit' value='Login' id='formControlLg' size="lg" />



            </div>



          </MDBCol>

        </MDBRow>

        
      </MDBContainer>
    </div>

  )
}

export default Body


