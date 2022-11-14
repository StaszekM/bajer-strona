import { Col, Container, Row } from "react-bootstrap";
import { BajerLogo } from "components/bajerLogo/bajerLogo";
import "./styles.css";
import { ScrollDownButton } from "components/scrollDownButton";

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
            <h3>Nagłośnienie | Oświetlenie | Integracje</h3>
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto mt-3 text-center">
            <ScrollDownButton target="o-nas" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
