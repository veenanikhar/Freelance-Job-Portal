import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './LoginForm.css'; // Ensure this file includes your custom styles

const LoginForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // At least 8 characters, one uppercase, one lowercase, one number

    let valid = true;

    // Email Validation
    if (!emailRegex.test(email)) {
      valid = false;
      alert("Please enter a valid email address.");
    }

    // Password Validation
    if (!passwordRegex.test(password)) {
      valid = false;
      alert("Password should be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number.");
    }

    if (valid && form.checkValidity()) {
      setValidated(true);
      // Form submission logic here
      console.log("Form submitted successfully!");
    } else {
      setValidated(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <div className="container-custom p-4 shadow-sm rounded bg-light">
            <h2 className="text-center mb-4">Sign in to your account</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100 btn-custom">
                LogIn
              </Button>
              <p className="text-center mt-3">
                No account? <Link to="/signup">Sign up</Link>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
