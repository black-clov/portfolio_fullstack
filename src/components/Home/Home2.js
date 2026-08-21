import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Ma passion est de concevoir des applications web et des plateformes e-commerce sur mesure pour des secteurs d'activité variés.
              <br />
              <br />
              Je maîtrise la stack
              <i>
                <b className="purple"> MERN : MongoDB, Express, React et Node.js, </b>
              </i>
              ainsi que
              <i>
                <b className="purple"> JavaScript / TypeScript, HTML5 et CSS3. </b>
              </i>
              <br />
              <br />
              Mes principaux domaines d'intérêt sont
              <i>
                <b className="purple"> le développement de sites web et de logiciels e-commerce, </b>
                avec un fort accent sur{" "}
                <b className="purple"> le paiement en ligne, la gestion des commandes et l'expérience utilisateur. </b>
              </i>
              <br />
              <br />
              J'aime concevoir des boutiques en ligne complètes, des API robustes et des back-offices d'administration avec{" "}
              <b className="purple"> React, Node.js/Express et des bases de données MongoDB, MySQL ou PostgreSQL, </b>
              tout en intégrant{" "}
              <b className="purple"> des solutions de paiement comme Stripe et PayPal. </b>
              <br />
              <br />
              J'ai eu l'occasion de développer des projets pour des secteurs variés tels que
              <i>
                <b className="purple"> la mode, l'alimentation, l'électronique, la beauté et la décoration, </b>
              </i>
              en adaptant chaque solution aux besoins spécifiques du client.
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
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter</span>
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
                  <FaTiktok />
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
