import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles.css";
import myImage from "../data/my_image.jpg";

function Bio() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={4} style={{ marginBottom: "20px" }}>
            <img
              src={myImage}
              alt="Profile Picture"
              className="img-fluid"
              style={{ width: "200px", height: "auto" }}
            />
            <div style={{ marginTop: "10px" }}>
              <h5>Dhanush Devireddy</h5>
              <div>
                <a
                  href="https://www.linkedin.com/in/dhanush-devireddy-717333218/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                  href="https://github.com/Dhanushdevireddy"
                  target="_blank"
                  style={{ marginLeft: "10px", color: "black" }}
                >
                  <i class="fab fa-github fa-2x"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} style={{ textAlign: "left" }}>
            <p>
              As a current M.Tech student in Computer Science and Engineering at
              the International Institute of Information Technology, Hyderabad,
              I am deeply engaged in exploring the dynamic fields of software
              development and cybersecurity. I am driven by a passion for
              innovation, eager to delve deeper into both software development
              and cybersecurity, aiming to develop secure, efficient, and
              cutting-edge solutions that address contemporary challenges and
              drive technological advancement.
            </p>
            <p>
              Prior to pursuing my M.Tech, I completed my B.Tech in Mechanical
              Engineering at the Indian Institute of Technology, Dharwad. This
              background has given me a strong foundation in problem-solving and
              analytical thinking, which I now apply to the field of computer
              science. My interdisciplinary knowledge allows me to approach
              challenges with a unique perspective, bridging mechanical
              principles with advanced computing technologies.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bio;
