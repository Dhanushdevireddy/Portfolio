import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles.css";

function Education() {
  return (
    <Container style={{ backgroundColor: "#f0f0f0" }}>
      <Row>
        <Col xs={12} md={4} style={{ marginBottom: "20px" }}>
          <h3>Education</h3>
        </Col>
        <Col xs={12} md={8} style={{ textAlign: "left" }}>
          <div>
            <h5>
              International Institute of Information Technology - Hyderabad
            </h5>
            <h6>
              Master of Technology in Computer Science and Engineering
              (2024-2026)
            </h6>
          </div>
          <div style={{ marginTop: "40px" }}>
            <h5>Indian Institute of Technology - Dharwad</h5>
            <h6>
              Bachelor of Technology in Mechanical Engineering (2020-2024)
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
