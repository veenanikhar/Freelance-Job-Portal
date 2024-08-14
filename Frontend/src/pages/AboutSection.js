import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutSection.css'; // Assuming you still have a CSS file for custom styles
import aboutImage from '../assets/images/about.jpg'; // Import the image
import mission_Image from '../assets/images/mission.jpg';
import vision_Image from '../assets/images/vision.jpg';
import team_Image from '../assets/images/team.jpg';
import why from '../assets/images/why.jpg';
import welcome from '../assets/images/welcome.jpg';
 
const AboutSection = () => {
  return (
    <Container className="ftco-about">
      <Row className="d-flex align-items-center">
        <Col md={7} className="ftco-animate">
          <h2>Welcome to JobBoard</h2>
          <p>
            At JobBoard, we believe in empowering professionals and businesses by bridging the gap between talent and opportunity. Whether you're a freelancer looking for your next big project or a business in need of specialized skills, our platform is designed to help you succeed.
          </p>
           </Col>
        <Col md={5} className="mb-4">
          <Image src={welcome} alt="About Us" fluid className="image_css" />
        </Col>
      </Row>

      <Row className="d-flex align-items-center">
      
        <Col md={5} className="mb-4">
          <Image src={mission_Image} alt="About Us" fluid className="image_css" />
        </Col>
        <Col md={7} className="ftco-animate">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower freelancers and businesses to achieve their full potential through a dynamic, inclusive platform. We are dedicated to creating a thriving community built on trust, diversity, and exceptional talent. By connecting skilled freelancers with forward-thinking businesses, we foster innovation, growth, and mutual success.
          </p>
        </Col>
        
      </Row>

      <Row className="d-flex align-items-center">
        
        <Col md={7} className="ftco-animate">
          <h2>Why Choose Us?</h2>
          <p> We offer a comprehensive platform designed to streamline the freelancing experience. Our curated opportunities match freelancers with ideal projects across diverse industries. With a global reach, we connect talent with businesses worldwide. Your security and trust are paramount, backed by robust measures and data protection. Our user-friendly interface simplifies job posting and application, while our dedicated support team ensures a seamless experience</p>
       </Col>
        <Col md={5} className="mb-4">
          <Image src={why} alt="About Us" fluid className="image_css" />
        </Col>
      </Row>

      <Row className="d-flex align-items-center">
      <Col md={5} className="mb-4">
          <Image src={team_Image} alt="About Us" fluid className="image_css" />
        </Col>
        <Col md={7} className="ftco-animate">
        
          <h2>Our Vision</h2>
          <p>
            To be the global marketplace where talent thrives and businesses flourish, empowering individuals and organizations to reach their full potential through seamless collaboration and innovation.We aspire to create a dynamic ecosystem that fosters a community of creators and problem-solvers, driving economic growth and social impact through the power of human connection.
            
          </p>
          </Col>

          
        
        </Row>
    </Container>
  );
};

export default AboutSection;
