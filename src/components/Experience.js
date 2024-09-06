import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles.css";
import experiences from "../data/experience.json";

function Experience() {
  const experienceList = experiences.map((experience) => (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ margin: "0" }}>{experience.Role}</h4>
        <h5 style={{ margin: "0" }}>{experience.Tenure}</h5>
      </div>

      <h5 style={{ marginTop: "10px", marginBottom: "10px" }}>
        {experience.Company}
      </h5>
      <ul>
        {experience.Points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <Container style={{ backgroundColor: "#f0f0f0" }}>
      <Row>
        <Col xs={12} md={4} style={{ marginBottom: "20px" }}>
          <h3>Work Experience</h3>
        </Col>
        <Col xs={12} md={8} style={{ textAlign: "left" }}>
          {experienceList}
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
