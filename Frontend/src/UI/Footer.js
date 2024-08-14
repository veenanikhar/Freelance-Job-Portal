// src/UI/Footer.js

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="mb-4">
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3">About Us</h5>
            <p>
              We are a leading freelance job portal connecting freelancers and clients worldwide. Our platform offers a wide range of job opportunities and a user-friendly interface for seamless interaction.
            </p>
          </Col>
          <Col xs={12} md={2} className="mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3">Follow Us</h5>
            <div className="d-flex mb-3">
              <a href="#" className="text-white mr-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-white mr-3"><FaInstagram size={24} /></a>
              <a href="#" className="text-white mr-3"><FaLinkedin size={24} /></a>
              <a href="#" className="text-white"><FaTwitter size={24} /></a>
            </div>
            <h5 className="font-weight-bold mb-3">Contact Us</h5>
            <p className="text-white">
              <FaEnvelope className="mr-2" /> support@freelanceportal.com
            </p>
            <p className="text-white">
              <FaMapMarkerAlt className="mr-2" /> 123 Freelance St, Remote City, World
            </p>
          </Col>
          <Col xs={12} md={3}>
            <h5 className="font-weight-bold mb-3">Newsletter</h5>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
                <Button variant="primary" type="submit" block>Subscribe</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="text-sm">&copy; 2024 Freelance Job Portal. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
