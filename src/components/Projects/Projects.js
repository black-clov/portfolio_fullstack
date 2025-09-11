import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/P4.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/P3.png";
import chatify from "../../Assets/Projects/P1.png";
import suicide from "../../Assets/Projects/P5.jpg";
import bitsOfCode from "../../Assets/Projects/P2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="VR Pilot"
              description="VR Simulation Application for pilots training flight."
              ghLink="https://drive.google.com/file/d/1RTkRAGnAYeH25Zgc_B333h0KEZv3P-OB/view?usp=sharing"
              demoLink="https://drive.google.com/file/d/1RTkRAGnAYeH25Zgc_B333h0KEZv3P-OB/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mixed training"
              description="Mixed Reality Application for education and entertainment training in industrial robotics."
              ghLink="https://drive.google.com/drive/folders/1pdK2Wjof9beMpwKHxFs62TPs-k5QjHhU"
              demoLink="https://drive.google.com/drive/folders/1pdK2Wjof9beMpwKHxFs62TPs-k5QjHhU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart Hospital"
              description="Augmented Reality Application for the medical field, allowing doctors to visualize and interact with patient data remotely and in real-time, using IOT sensors and devices."
              ghLink="https://drive.google.com/drive/folders/1pdK2Wjof9beMpwKHxFs62TPs-k5QjHhU"
              demoLink="https://drive.google.com/drive/folders/1pdK2Wjof9beMpwKHxFs62TPs-k5QjHhU"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI NPC chatbot VR for insurance"
              description="An AI-powered Non-Player Character (NPC) chatbot designed for virtual reality (VR) environments, specifically tailored for the insurance industry, providing users with an interactive and immersive experience to address their insurance-related queries and concerns."
              ghLink="https://drive.google.com/drive/folders/1pdK2Wjof9beMpwKHxFs62TPs-k5QjHhU"
              demoLink="https://drive.google.com/drive/folders/1pdK2Wjof9beMpwKHxFs62TPs-k5QjHhU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="3D Web application for campus indoor navigation "
              description="Development of 3D application to help students and visitors inside the campus navigate from door to door using 3D modeling floors and advanced path finding algorithms"
              ghLink="https://drive.google.com/file/d/1KJlGy45nWoWiwDko6EQmD9qCOewEbzf-/view?usp=drivesdk"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/black-clov"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
