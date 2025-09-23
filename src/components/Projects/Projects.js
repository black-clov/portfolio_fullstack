import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images from internet (Unsplash, Medium, etc.)
const dataPipelineImg = "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*U1MSSPFcAckU4i_SFsMghw.png";
const dashboardImg = "https://cdn.analyticsvidhya.com/wp-content/uploads/2020/05/tableau-vs-power-bi.png";
const sentimentImg = "https://editor.analyticsvidhya.com/uploads/91246sentiment%20analysis.png";
const bigDataImg = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*BaxD1-QE7yzqqmHIjhX8Cg.png";
const recommendationImg = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*7l9O6-HJpZo2PdnPbn9sPQ.png";
const fraudImg = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*dJX_Q5p6lV4kE8VnVY8f7Q.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Data Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some Data Science, Data Engineering, and Analytics projects I’ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Data Pipeline */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataPipelineImg}
              isBlog={false}
              title="End-to-End Data Pipeline"
              description="Designed and implemented an automated data pipeline using Apache Airflow, Spark, and AWS S3 for ETL (Extract, Transform, Load) workflows to process millions of records daily."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Dashboard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboardImg}
              isBlog={false}
              title="Business Intelligence Dashboard"
              description="Created an interactive sales & KPI dashboard using Power BI and Tableau. Connected multiple SQL and NoSQL databases to visualize real-time business performance metrics."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Sentiment Analysis */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentimentImg}
              isBlog={false}
              title="Sentiment Analysis on Social Media"
              description="Applied NLP techniques with Python (NLTK, Scikit-learn) to analyze Twitter sentiment. Trained a model achieving 85% accuracy in predicting positive/negative tweets."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Big Data Processing */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigDataImg}
              isBlog={false}
              title="Big Data Analytics with Spark"
              description="Processed and analyzed 100+ GB of log data using PySpark on Hadoop cluster. Built machine learning models for anomaly detection and real-time insights."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Recommendation System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recommendationImg}
              isBlog={false}
              title="Recommendation System"
              description="Built a movie recommendation system using collaborative filtering and content-based methods. Deployed with Flask and integrated into a web application."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Fraud Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraudImg}
              isBlog={false}
              title="Fraud Detection Model"
              description="Developed a fraud detection system using machine learning (Random Forest, XGBoost). Achieved high precision/recall on imbalanced credit card transactions dataset."
              ghLink="https://github.com/black-clov"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
