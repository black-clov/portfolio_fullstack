import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const Scene3D = lazy(() => import(/* webpackChunkName: "scene3d" */ "./Scene3D"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                JE SUIS
                <strong className="main-name"> EL MOUDIR Mouhsine</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{ width: "100%", height: "450px" }}>
                <Suspense
                  fallback={
                    <img
                      src={homeLogo}
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "450px" }}
                    />
                  }
                >
                  <Scene3D
                    fallback={
                      <img
                        src={homeLogo}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                      />
                    }
                  />
                </Suspense>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
