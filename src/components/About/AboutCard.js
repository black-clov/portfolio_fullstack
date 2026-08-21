import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">ELMOUDIR Mouhsine </span>
            de <span className="purple"> Casablanca, Maroc.</span>
            <br />
            Je suis titulaire d'un Master en Technologies Immersives & Intelligence Artificielle
            <br />
            J'ai une Licence en Génie Logiciel.
            <br />
            & un Diplôme Universitaire de Technologie en Data Science et Business Intelligence.
            <br />
            En dehors du code, voici d'autres activités que j'aime pratiquer !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Écrire des articles techniques
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "S'efforcer de construire des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">EL MOUDIR</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
