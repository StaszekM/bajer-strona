import { BajerLogo } from "../bajerLogo/bajerLogo";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

export function WelcomeBanner() {
  return (
    <div className="welcome-banner-container min-vh-100">
      <Container>
        <Row>
          <Col className="mx-auto text-center bajer-logo-col">
            <BajerLogo />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto text-center bajer-font">
            <h3 className="text-white">
              Nagłośnienie | Oświetlenie | Integracje
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
