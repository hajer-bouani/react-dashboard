import React , {useState, useContext} from "react";
// import  { Redirect } from 'react-router-dom'
// import { browserHistory } from 'react-router';
import "./Login.css"
import { Link } from "react-router-dom";
import AuthContext from '../context/auth-context'
import Jwt from "jsonwebtoken";
// import { Redirect } from 'react-router'
import {
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import Axios from "axios";
const Login = (props: any) => {
  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  const authContext = useContext(AuthContext)
  const handleSubmit =(event: any)=>{
    Axios.post("http://localhost:8080/api/auth/signin",{
      usernameOrEmail:username,
      password:password
    }).then(success=>{
      console.log("Connected as",Jwt.decode(success.data.accessToken))
      localStorage.setItem("token",success.data.accessToken);
      props.history.push('/dashboard')

    }).catch(error=>{
      console.log(error)
    }
    )
    event.preventDefault()
  }
  const handleUsernameChange = (event: any) =>{
    setUsername(event.target.value)
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
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <form onSubmit={handleSubmit}>
                <div className="grey-text">
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
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? <Link to="/signup/">Sign Up</Link></p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
    </div>

  );
};

export default Login;