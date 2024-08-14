import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ProcessSection.css"
import registerImg from '../assets/images/RegisterImg.png';
import candidate from '../assets/images/candidateImg.png'
import Resume from '../assets/images/cv.png'
import { Link } from 'react-router-dom';
const ProcessSection = () => {
  return (
    <section className="process-section pt-0">
      <Container>
        <div className="sec-title text-center">
          <h2>How It Works?</h2>
          <div className="text">Job for anyone, anywhere</div>
        </div>
        <Row className="aos-init aos-animate" data-aos="fade-up">
          <Col lg={4} md={6} sm={12} className="process-block">
            <Link to="/signup" className="link-wrapper">
            <div className="icon-box">
              <Image
                alt="Register an account"
                src={registerImg}
                width={50}
                height={61}
                fluid
                loading="lazy"
              />
            </div>
            </Link>
            <h4>Register an account <br />to start</h4>
          </Col>
          <Col lg={4} md={6} sm={12} className="process-block">
            <div className="icon-box">
              <Image
                alt="Explore resumes"
                src={Resume}
                width={50}
                height={61}
                fluid
                loading="lazy"
              />
            </div>
            <h4>Explore over thousands <br />of resumes</h4>
          </Col>
          <Col lg={4} md={6} sm={12} className="process-block">
            <div className="icon-box">
              <Image
                alt="Find the most suitable candidate"
                src={candidate}
                width={50}
                height={61}
                fluid
                loading="lazy"
              />
            </div>
            <h4>Find the most suitable <br />candidate</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProcessSection;
