import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My passion lies in turning data into actionable insights and intelligent solutions.
              <br />
              <br />
              I am fluent in core technologies such as
              <i>
                <b className="purple"> Python (Pandas, NumPy, Scikit-learn, PySpark), SQL </b>
              </i>
              <br />
              <br />
              My main fields of interest are
              <i>
                <b className="purple"> Data Science, Machine Learning, and Business Intelligence, </b>
                with a strong focus on{" "}
                <b className="purple"> predictive modeling, data visualization, and decision support systems. </b>
              </i>
              <br />
              <br />
              I enjoy building robust data pipelines, interactive dashboards, and analytical solutions using{" "}
              <b className="purple"> Power BI, Tableau, and Python APIs, </b>
              while also exploring{" "}
              <b className="purple"> Big Data frameworks like PySpark. </b>
              <br />
              <br />
              Whenever possible, I apply my expertise to real-world projects that combine
              <i>
                <b className="purple"> data engineering, advanced analytics, and AI-driven insights </b>
              </i>
              to solve complex business challenges.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/black-clov"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@mr.unreal.things?_t=ZS-8yawoXwqWPc&_r=1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mouhsine-el-moudir-a0842221b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mr.unreal.things/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
