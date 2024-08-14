// src/JobPostsSection.js
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import "./JobPostSection.css"
// import { FaChevronRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


const JobPostSection = () => {
  return (
    <section className="ftco-section ftco-counter">
      <Container>
        <Row className="justify-content-center d-flex">
          <Col md={7} className="heading-section text-center">
            <span className="subheading">Categories work waiting for you</span>
            <h2 className="mb-2"><span>Current</span> Job Posts</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item action>
                Web Development 
              </ListGroup.Item>
              <ListGroup.Item action>
                Graphic Designer 
              </ListGroup.Item>
              <ListGroup.Item action>
                Data analytics 
              </ListGroup.Item>
              {/* <ListGroup.Item action>
                Advertising <span className="number">900</span>
              </ListGroup.Item> */}
            </ListGroup>
          </Col>
      
        
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item action>
                PHP Programming
              </ListGroup.Item>
              {/* <ListGroup.Item action>
                Project Management <span className="number">2,000</span>
              </ListGroup.Item> */}
              <ListGroup.Item action>
                Python Developer 
              </ListGroup.Item>
              <ListGroup.Item action>
                Node.Js &amp; Developer 
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item action>
                Associate Software Developer 
              </ListGroup.Item>
              {/* <ListGroup.Item action>
                Customer Service <span className="number">4,000</span>
              </ListGroup.Item> */}
              <ListGroup.Item action>
                Full Stack &amp; Developer 
              </ListGroup.Item>
              <ListGroup.Item action>
                Software Development 
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JobPostSection;
