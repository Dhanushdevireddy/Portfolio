import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import "../styles.css";
import projects from "../data/projects.json";

function Projects() {
  const projectList = projects.map((project) => (
    <div>
      <Card
        style={{ width: "16rem", marginBottom: "20px", marginRight: "20px" }}
      >
        <Card.Body>
          <Card.Title>
            <h5>
              {project.name}
              <a
                href={project.link}
                target="_blank"
                style={{ marginLeft: "10px", color: "black" }}
              >
                <i class="fab fa-github"></i>
              </a>
            </h5>
          </Card.Title>
          <Card.Text style={{ marginTop: "20px" }}>
            {project.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} style={{ marginBottom: "20px" }}>
          <h3>Projects</h3>
        </Col>
        <Col xs={12} md={8}>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              flexWrap: "wrap", // Added to wrap content
              overflow: "hidden",
            }}
          >
            {projectList}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
