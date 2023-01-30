import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import './Body.css'


function Logo() {
  return (
   
    <div className='border-login container  mb-5 '  >
      <MDBContainer fluid className="p-3 my-5 h-custom">
   
        <MDBRow>

          <MDBCol col='10' md='6'>
            <img className='image' src="images/girl-1.png"  alt="" />
          </MDBCol>

          <MDBCol col='4' md='6'>
            
          <div className='border-login' >
          
          <div className="d-flex flex-row align-items-center justify-content-center">
              <h1 className="hi mb-5 mt-3">Login</h1>
    
            </div>

            <MDBInput wrapperClass='mb-4 ms-4 me-4' label='Email address' id='formControlLg' type='email' size="lg" />
            <MDBInput wrapperClass='mb-4 ms-4 me-4' label='Password' id='formControlLg' type='password' size="lg" />

            <div className='text-center text-md-start mt-4 pt-2'>
              <div className='d-flex justify-content-center'>
              <button type='submit' style={{width:'570px',height:'45px'}} className='btn btn-success mb-5'>Login</button>
              </div>
            </div>
          </div>

            

          </MDBCol>

        </MDBRow>

        <div className="">

    

          <div>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='facebook-f' size="md" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='twitter' size="md" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='google' size="md" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='linkedin-in' size="md" />
            </MDBBtn>

          </div>

        </div>

      </MDBContainer> 
      </div>
       
  )
}

export default Logo


