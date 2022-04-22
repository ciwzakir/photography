import React, { useState } from "react";
import "./SignUp.css";

import { Button, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userEmail = (e) => {
    setEmail(e.target.value);
  };

  const userPassword = (e) => {
    setPassword(e.target.value);
  };

  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const HandleSignUpFormSubmit = (e) => {
    const navigateToHomePage = () => {
      navigate("/");
    };
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    setValidated(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        navigateToHomePage();
      })
      .catch((error) => {
        // console.error(error);
      });
    console.log("form submitted");
    e.preventDefault();
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center"> Please Register</h2>

      <Form noValidate validated={validated} onSubmit={HandleSignUpFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={userEmail}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={userPassword}
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

export default SignUp;
