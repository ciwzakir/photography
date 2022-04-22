import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./LogIn.css";
import app from "../../../firebase.init";


const LogIn = () => {
  const auth = getAuth(app);

  const [validated, setValidated] = useState(false);

  const logInFormSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

  }
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center"> Log In</h2>

      <Form noValidate validated={validated} onSubmit={logInFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
         
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
        
            type="password"
            placeholder="Password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please give a valid password
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
