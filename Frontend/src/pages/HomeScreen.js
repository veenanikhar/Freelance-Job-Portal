import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUnlockAlt } from "react-icons/fa";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [validated, setValidated] = useState(false);
  const [loginType, setLoginType] = useState("Freelancer");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    let valid = true;

    if (!emailRegex.test(email)) {
      valid = false;
      alert("Please enter a valid email address.");
    }

    if (!passwordRegex.test(password)) {
      valid = false;
      alert(
        "Password should be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number."
      );
    }

    // if (valid && form.checkValidity()) {
    //   setValidated(true);
    //   if (loginType === "Freelancer") {
    //     navigate("/home"); // Redirect to Home page for Freelancer
    //   }
    //   if (loginType === "Client") {
    //     navigate("/home"); // Redirect to Home page for Client
    //   }
    //   if (loginType === "Admin") {
    //     navigate("/home"); // Redirect to Home page for Admin
    //   }
    // } else {
    //   setValidated(false);
    // }
    if (loginType === "Freelancer") {
      navigate("/home");
    } else if (loginType === "Client") {
      navigate("/client-dashboard");
    } else if (loginType === "Admin") {
      navigate("/admin-dashboard");
    } else {
      setError("Unknown role received.");
      setValidated(false);
    }
  };

  return (
    <div className="home-screen">
      <Container>
        <Row>
          <Col lg={6} md={6} className="d-flex">
            <div className="text-white max-w400 align-self-center">
              <h2 className="mb-3">Welcome to Job Board</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the industry.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="login-2 submit-resume p-4 seth">
              <Form noValidate validated={validated} onSubmit={handleLogin}>
                <p className="font-weight-bold">
                  If you have an account with us, please log in.
                </p>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="loginType">Login As</Form.Label>
                  <Form.Select
                    name="loginType"
                    value={loginType}
                    onChange={(e) => setLoginType(e.target.value)}
                    required
                  >
                    <option value="Freelancer">Freelancer</option>
                    <option value="Client">Client</option>
                    <option value="Admin">Admin</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">E-Mail Address*</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Type Your Email Address"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="password">Password *</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Type Your Password"
                    required
                  />
                </Form.Group>
                <div className="text-left">
                  <Button variant="primary" type="submit">
                    <FaUnlockAlt className="me-2" />
                    Login
                  </Button>
                </div>
                <div className="mt-3">
                  <Link to="/signup" className="link-wrapper">
                    <a href="/react/demo/register" className="font-weight-bold">
                      Create an account
                    </a>
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
