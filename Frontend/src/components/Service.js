// src/components/Service.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBriefcase, faChartLine, faUserTie } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';

const Service = () => {
  return (
    <section className="py-5 bg-light Features_Section">
      <Container>
        <h1 className="text-center mb-4">Explore Our Features</h1>
        <Row className="g-4">
          <Col md={3}>
            <Card className="text-center border-0 shadow-sm">
              <Card.Body>
                <FontAwesomeIcon icon={faSearch} className="fs-3 mb-3 d-block text-primary" />
                <Card.Title>Search Millions of Jobs</Card.Title>
                <Card.Text>
                  Discover a wide variety of job opportunities across multiple industries. Find the perfect match for your skills and interests.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center border-0 shadow-sm">
              <Card.Body>
                <FontAwesomeIcon icon={faBriefcase} className="fs-3 mb-3 d-block text-primary" />
                <Card.Title>Easy To Manage Jobs</Card.Title>
                <Card.Text>
                  Seamlessly manage your job applications and track your progress with our user-friendly platform.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center border-0 shadow-sm">
              <Card.Body>
                <FontAwesomeIcon icon={faChartLine} className="fs-3 mb-3 d-block text-primary" />
                <Card.Title>Top Careers</Card.Title>
                <Card.Text>
                  Explore top career paths and find jobs that offer growth opportunities and competitive salaries.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center border-0 shadow-sm">
              <Card.Body>
                <FontAwesomeIcon icon={faUserTie} className="fs-3 mb-3 d-block text-primary" />
                <Card.Title>Search Expert Candidates</Card.Title>
                <Card.Text>
                  Connect with highly skilled candidates who are experts in their fields and ready to make an impact.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
