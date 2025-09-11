import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiGit } from "react-icons/di";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiApachehadoop,
  SiApacheairflow,
  SiApachespark,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTableau,
  SiPowerbi,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiMicrosoftazure,
  SiAmazonaws,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNumpy /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPandas /></Col>

      {/* Machine Learning & AI */}
      <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJupyter /></Col>

      {/* Big Data & Pipelines */}
      <Col xs={4} md={2} className="tech-icons"><SiApachespark /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachehadoop /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApacheairflow /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>

      {/* BI & Visualization */}
      <Col xs={4} md={2} className="tech-icons"><SiPowerbi /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTableau /></Col>

      {/* DevOps / Cloud */}
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKubernetes /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglecloud /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftazure /></Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
    </Row>
  );
}

export default Techstack;
