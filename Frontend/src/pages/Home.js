import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProcessSection from "../components/ProcessSection";
import Service from "../components/Service";
import JobPostSection from "../components/JobPostSection";
import NewsSection from "../components/NewsArticle";
import banner from "../assets/images/Header_image1.png"; // Adjust the path as per your project structure


const Home = () => {
  return (
    <>
      <header className="App-header">
        <Container className="p-4">
          <Row className="flex-wrap mt-5 py-5">
            <Col md={6} className="p-2">
              <h1 className="text-2xl font-bold mb-4">
                Unlock Your Potential on Our Freelance Job Portal!
              </h1>
              <p className="custom-paragraph">
                Step into a vibrant community where freelancers and clients come
                together effortlessly. Explore exciting job opportunities,
                showcase your proposals, and manage your projects with ease.
                Join us today to elevate your freelancing journey and achieve
                new heights in your career.
              </p>
              <div className="job-search-form">
                <Form>
                  <Row className="g-3">
                    <Col lg={5} md={12} sm={12}>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="bi bi-search"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Job title, keywords, or company"
                          name="job_title"
                        />
                      </InputGroup>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="bi bi-geo-alt"></i>
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="City or postcode"
                          name="location"
                        />
                      </InputGroup>
                    </Col>
                    <Col lg={3} md={12} sm={12} className="d-grid">
                      <Button variant="primary" type="submit">
                        Find Jobs
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
              {/* <div
                className="popular-searches"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <span className="title">Popular Searches:</span>
                <a href="#">Designer</a>,<a href="#">Developer</a>,
                <a href="#">Web</a>,<a href="#">iOS</a>,<a href="#">PHP</a>,
                <a href="#">Senior</a>,<a href="#">Engineer</a>
              </div> */}
            </Col>
            <Col md={6} className="p-2">
              <img src={banner} alt="Banner" className="w-100 h-auto" />
            </Col>
          </Row>
        </Container>
      </header>
      <ProcessSection/>
      <Service />
      <JobPostSection />
      <NewsSection/>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
