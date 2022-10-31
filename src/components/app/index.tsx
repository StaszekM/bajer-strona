import "./styles.css";
import { AppNavbar } from "../navbar";
import { BajerLogo } from "../bajerLogo/bajerLogo";
import { Col, Container, Row } from "react-bootstrap";
import "../../globalStyles.css";

function WelcomeBanner() {
  return (
    <div className="welcome-banner-container">
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

function App() {
  return (
    <>
      <AppNavbar />
      <WelcomeBanner />
    </>
  );
}

export default App;
