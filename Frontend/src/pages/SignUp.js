import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./SignUp.css";

const SignUp = () => {
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    loginAs: "",
  });
  // Handler to update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // At least 8 characters, one uppercase, one lowercase, one number

    let valid = true;

    // First Name Validation
    if (!nameRegex.test(firstName)) {
      valid = false;
      alert("First name should contain only letters.");
    }

    // Last Name Validation
    if (!nameRegex.test(lastName)) {
      valid = false;
      alert("Last name should contain only letters.");
    }

    // Email Validation
    if (!emailRegex.test(email)) {
      valid = false;
      alert("Please enter a valid email address.");
    }

    // Password Validation
    if (!passwordRegex.test(password)) {
      valid = false;
      alert(
        "Password should be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number."
      );
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      valid = false;
      alert("Passwords do not match.");
    }

    if (valid && form.checkValidity()) {
      setValidated(true);
      try {
        await axios.post(
          "http://localhost:8080/jobPortal/freelancer/register",
          formData
        );
        navigate("/"); // Redirect after successful submission
      } catch (error) {
        console.error(
          "Error submitting form:",
          error.response ? error.response.data : error.message
        );
        alert("An error occurred while submitting the form.");
      }
    } else {
      setValidated(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <div className="container-custom p-4 shadow-sm rounded bg-light">
            <h2 className="text-center mb-4">Job Application Form</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Applying As</Form.Label>
                <Form.Control
                  as="select"
                  name="loginAs"
                  value={formData.loginAs}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="freelancer">As a Freelancer</option>
                  <option value="client">As a Client</option>
                </Form.Control>
              </Form.Group>
              <Button type="submit" className="w-100 btn-custom btn-primary">
                Apply Now
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
