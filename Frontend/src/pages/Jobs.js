import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Jobs.css';

const FindJob = () => {
  // Step 1: Create a static array of job data
  const jobs = [
    { id: 1, role: "Software Engineer", experience: "2-4 years", skills: "JavaScript, React, Node.js", applyLink: "/apply/1", readMoreLink: "/job/1" },
    { id: 2, role: "Data Scientist", experience: "3-5 years", skills: "Python, R, Machine Learning", applyLink: "/apply/2", readMoreLink: "/job/2" },
    { id: 3, role: "UX/UI Designer", experience: "1-3 years", skills: "Sketch, Figma, Adobe XD", applyLink: "/apply/3", readMoreLink: "/job/3" },
    { id: 4, role: "DevOps Engineer", experience: "3-5 years", skills: "AWS, Docker, Kubernetes", applyLink: "/apply/4", readMoreLink: "/job/4" },
    { id: 5, role: "Project Manager", experience: "5-7 years", skills: "Agile, Scrum, Leadership", applyLink: "/apply/5", readMoreLink: "/job/5" },
    { id: 6, role: "Quality Assurance Engineer", experience: "2-4 years", skills: "Selenium, TestNG, JIRA", applyLink: "/apply/6", readMoreLink: "/job/6" },
    { id: 7, role: "Mobile App Developer", experience: "3-5 years", skills: "Flutter, React Native, Android", applyLink: "/apply/7", readMoreLink: "/job/7" },
    { id: 8, role: "Full Stack Developer", experience: "4-6 years", skills: "JavaScript, Node.js, MongoDB", applyLink: "/apply/8", readMoreLink: "/job/8" },
    { id: 9, role: "Product Manager", experience: "5-7 years", skills: "Product Strategy, UX/UI, Roadmapping", applyLink: "/apply/9", readMoreLink: "/job/9" },
    { id: 10, role: "Systems Analyst", experience: "3-5 years", skills: "System Design, SQL, Business Analysis", applyLink: "/apply/10", readMoreLink: "/job/10" },
    { id: 11, role: "Network Engineer", experience: "2-4 years", skills: "Cisco, Network Security, VPN", applyLink: "/apply/11", readMoreLink: "/job/11" },
    { id: 12, role: "Cybersecurity Specialist", experience: "4-6 years", skills: "Ethical Hacking, Firewalls, SIEM", applyLink: "/apply/12", readMoreLink: "/job/12" },
    { id: 13, role: "Database Administrator", experience: "3-5 years", skills: "SQL, Oracle, Performance Tuning", applyLink: "/apply/13", readMoreLink: "/job/13" },
    { id: 14, role: "AI/ML Engineer", experience: "2-4 years", skills: "TensorFlow, Python, Deep Learning", applyLink: "/apply/14", readMoreLink: "/job/14" },
    { id: 15, role: "Blockchain Developer", experience: "3-5 years", skills: "Ethereum, Solidity, Smart Contracts", applyLink: "/apply/15", readMoreLink: "/job/15" },
    { id: 16, role: "Cloud Architect", experience: "5-7 years", skills: "AWS, Azure, Cloud Security", applyLink: "/apply/16", readMoreLink: "/job/16" },
    { id: 17, role: "IT Support Specialist", experience: "1-3 years", skills: "Help Desk, Troubleshooting, Windows", applyLink: "/apply/17", readMoreLink: "/job/17" },
    { id: 18, role: "Technical Writer", experience: "2-4 years", skills: "Documentation, API, UX Writing", applyLink: "/apply/18", readMoreLink: "/job/18" },
    { id: 19, role: "Frontend Developer", experience: "2-4 years", skills: "HTML, CSS, JavaScript, React", applyLink: "/apply/19", readMoreLink: "/job/19" },
    { id: 20, role: "Backend Developer", experience: "3-5 years", skills: "Node.js, Express, SQL", applyLink: "/apply/20", readMoreLink: "/job/20" },
    { id: 21, role: "Business Analyst", experience: "3-5 years", skills: "Business Process, SQL, Reporting", applyLink: "/apply/21", readMoreLink: "/job/21" },
    { id: 22, role: "Graphic Designer", experience: "1-3 years", skills: "Adobe Creative Suite, Branding, Web Design", applyLink: "/apply/22", readMoreLink: "/job/22" },
    { id: 23, role: "Content Strategist", experience: "2-4 years", skills: "SEO, Content Marketing, Copywriting", applyLink: "/apply/23", readMoreLink: "/job/23" },
    { id: 24, role: "Data Engineer", experience: "3-5 years", skills: "Big Data, ETL, SQL", applyLink: "/apply/24", readMoreLink: "/job/24" },
    { id: 25, role: "Scrum Master", experience: "4-6 years", skills: "Scrum, Agile, Project Management", applyLink: "/apply/25", readMoreLink: "/job/25" },
    { id: 26, role: "SEO Specialist", experience: "2-4 years", skills: "SEO, Google Analytics, SEM", applyLink: "/apply/26", readMoreLink: "/job/26" },
    { id: 27, role: "Marketing Manager", experience: "5-7 years", skills: "Digital Marketing, Strategy, Branding", applyLink: "/apply/27", readMoreLink: "/job/27" },
    { id: 28, role: "Operations Manager", experience: "5-7 years", skills: "Supply Chain, Lean Manufacturing, Process Improvement", applyLink: "/apply/28", readMoreLink: "/job/28" },
    { id: 29, role: "HR Manager", experience: "5-7 years", skills: "Recruitment, Employee Relations, HRIS", applyLink: "/apply/29", readMoreLink: "/job/29" },
    { id: 30, role: "Legal Counsel", experience: "5-7 years", skills: "Corporate Law, Compliance, Contracts", applyLink: "/apply/30", readMoreLink: "/job/30" }
  ];

  // Step 2: Use map() to generate a card for each job
  return (
    <Container>
      <Row>
        {jobs.map(job => (
          <Col lg={4} md={6} sm={12} className="mb-4" key={job.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{job.role}</Card.Title>
                <Card.Text>
                  <strong>Experience:</strong> {job.experience} <br />
                  <strong>Skills:</strong> {job.skills}
                </Card.Text>
                <Button variant="primary" as={Link} to={job.applyLink}>
                  Apply Job
                </Button>
                <Button variant="link" as={Link} to={job.readMoreLink}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FindJob;
