import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fashionImg from "../../Assets/Projects/Ecommerce/fashion.svg";
import foodImg from "../../Assets/Projects/Ecommerce/food.svg";
import electronicsImg from "../../Assets/Projects/Ecommerce/electronics.svg";
import beautyImg from "../../Assets/Projects/Ecommerce/beauty.svg";
import groceryImg from "../../Assets/Projects/Ecommerce/grocery.svg";
import furnitureImg from "../../Assets/Projects/Ecommerce/furniture.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets E-commerce</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques plateformes e-commerce développées avec la stack MERN (MongoDB, Express, React, Node.js) pour différents secteurs d'activité.
          <br />
          <em>Exemples de réalisations à titre illustratif — captures d'écran à venir.</em>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Mode & Vêtements */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashionImg}
              isBlog={false}
              title="Boutique de Mode en Ligne"
              description="Développement d'une boutique de vêtements avec React et Node.js : catalogue filtrable, panier d'achat, paiement sécurisé via Stripe et back-office de gestion des stocks."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Restauration & Livraison */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodImg}
              isBlog={false}
              title="Plateforme de Commande de Repas"
              description="Conception d'une plateforme de commande et de livraison de repas avec React, Express et MongoDB : suivi de commande en temps réel, géolocalisation et paiement en ligne."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Électronique */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={electronicsImg}
              isBlog={false}
              title="Marketplace Électronique"
              description="Réalisation d'une marketplace multi-vendeurs pour produits électroniques avec authentification JWT, comparateur de produits, avis clients et paiement via PayPal/Stripe."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Beauté & Cosmétiques */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beautyImg}
              isBlog={false}
              title="Boutique de Beauté & Cosmétiques"
              description="Développement d'un site e-commerce de cosmétiques avec React/Node.js : recommandations personnalisées, gestion des promotions et tableau de bord d'administration."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Épicerie & Supermarché */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groceryImg}
              isBlog={false}
              title="Supermarché en Ligne"
              description="Création d'une application de supermarché en ligne avec React et MongoDB : créneaux de livraison, paniers récurrents et notifications de suivi de commande."
              ghLink="https://github.com/black-clov"
            />
          </Col>

          {/* Mobilier & Décoration */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furnitureImg}
              isBlog={false}
              title="Boutique de Mobilier & Décoration"
              description="Développement d'une boutique de mobilier et décoration avec fiches produits détaillées, simulateur de devis et paiement en plusieurs fois via Stripe."
              ghLink="https://github.com/black-clov"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
