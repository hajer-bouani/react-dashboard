import React , {useState} from "react";
import "./Login.css"
import Axios from "axios"
import { Link } from "react-router-dom";
import {
  
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

const Signup = () => {
  const [username,setUsername]= useState("");
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const handleSubmit =(event: any)=>{
    console.log("Testing",username,email,password);
    Axios.post("http://localhost:8080/api/auth/signup",{
      name,
      username,
      password,
      email
    }).then(success=>{
      console.log("Signed up",success.data)
    }).catch(error=>{
      console.error(error)
    })
        event.preventDefault()
  }
  const handleUsernameChange = (event: any) =>{
    setUsername(event.target.value)
  }
  const handleNameChange = (event: any) =>{
    setName(event.target.value)
  }
  const handleEmailChange = (event: any) =>{
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event: any) =>{
    setPassword(event.target.value)
  }
  return (
    <div className="d-flex justify-content-center full-height-width">    
      
          <MDBCard className="my-card">
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3 white-text text-center">
                  <MDBIcon icon="lock" /> Sign Up:
                </h3>
              </MDBCardHeader>
              <form onSubmit={handleSubmit}>
                <div className="grey-text">
                  <MDBInput
                    label="Type your name"
                    
                    group
                    type="text"
                    validate
                    required
                    error="wrong"
                    success="right"
                    onChange={handleNameChange}
                  />
                  <MDBInput
                    label="Type your username"
                    icon="user"
                    group
                    type="text"
                    validate
                    required
                    error="wrong"
                    success="right"
                    onChange={handleUsernameChange}
                  />
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    required
                    error="wrong"
                    success="right"
                    onChange={handleEmailChange}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={handlePasswordChange}
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                >
                  Sign up
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Already a member? <Link to="/login/">Log in</Link></p>
                  
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
    </div>

  );
};

export default Signup;