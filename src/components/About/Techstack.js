import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiStripe,
  SiPaypal,
  SiJsonwebtokens,
  SiDocker,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Front-end */}
      <Col xs={4} md={2} className="tech-icons"><SiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJavascript /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRedux /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>

      {/* Back-end */}
      <Col xs={4} md={2} className="tech-icons"><SiNodedotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGraphql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJsonwebtokens /></Col>

      {/* Bases de données */}
      <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>

      {/* Paiement en ligne */}
      <Col xs={4} md={2} className="tech-icons"><SiStripe /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPaypal /></Col>

      {/* DevOps & Versioning */}
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
    </Row>
  );
}

export default Techstack;
