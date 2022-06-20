import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './SignForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter ,faGithub } from "@fortawesome/free-brands-svg-icons";


const SignForm = () => {
  return (
    <Form className="main-container">
      <Form.Group className="title text-light" >
        <h1>Sign Up</h1>
      </Form.Group>
      <br></br>
  <Form.Group className="username mb-3 text-center " controlId="formBasicEmail" >
    <Form.Label>Username: </Form.Label>
    <Form.Control type="text" placeholder="Enter username" required/>
  </Form.Group> 
  <br></br>   
  <Form.Group className="email mb-3 text-center text-light " controlId="formBasicEmail">
    <Form.Label>Email address: </Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
  </Form.Group>
<br></br>
<Form.Group className="confirm-email mb-3 text-center text-light" controlId="formBasicEmail">
    <Form.Label>Confirm Email: </Form.Label>
    <Form.Control type="email" placeholder="Confirm email" required />
  </Form.Group>
  <br></br>
  <Form.Group className="password mb-3 text-light" controlId="formBasicPassword">
    <Form.Label>Password: </Form.Label>
    <Form.Control type="password" placeholder="Password" required/>
  </Form.Group>
  <br></br>
  <Form.Group className="confirm-pass mb-3 text-center text-light" controlId="formBasicEmail">
    <Form.Label>Confirm password: </Form.Label>
    <Form.Control type="password" placeholder="Confirm password" required />
  </Form.Group>
  <br></br>
  <Button variant="info" type="submit">
    Sign up
  </Button>
  
  <Form.Group className="register-button">
    <p><b>Already An User ?  </b></p>
    <button varient="primary" color="info" type="submit">
      Log in
    </button>
  </Form.Group>
  <p><b>Or, Sign up with</b></p>
  <br></br>
  <Form.Group>
     <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>  
     <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>  
     <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>  
     <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>   
  </Form.Group>
</Form>
  );
};
export default SignForm;