import React, { useState } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import axios from '../../../axios'
import './Body.css'


function Body() {

  const initialVlaues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialVlaues);
  const navigate = useNavigate();


  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('office/login', {

      email: formValues.email,
      password: formValues.password,

    }).then((response) => {
      const jwtToken = response.data.token
      localStorage.setItem("officeToken", jwtToken);
      navigate('/office/home');

    }).catch((error) => {
      console.log(error);

    })
  }

  return (

    <div className='border-login container  mb-5 '  >
      <MDBContainer fluid className="p-3 my-5 h-custom">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img className='image' src="/images/girl-1.png" alt="" />
          </MDBCol>

          <MDBCol col='4' md='6'>

            <div className='border-login ' >

              <div className="d-flex flex-row align-items-center justify-content-center">
                <h1 className="mb-5 mt-3">Login</h1>

              </div>

              <form onSubmit={handleSubmit}>
                <MDBInput
                  value={formValues.email}
                  onChange={onChangeHandle}
                  wrapperClass='mb-4 ms-4 me-4'
                  className='input' name='email'
                  label='Email address' id='formControlLg'
                  type='email' size="lg"
                />

                <MDBInput wrapperClass='mb-4 ms-4 me-4'
                  className='input' name='password'
                  label='Password' id='formControlLg'
                  type='password' size="lg"
                  value={formValues.password}
                  onChange={onChangeHandle}

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

export default Body


