import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

export function ErrorPage() {
  return (
    <>
      <div className="error-page-container">
        <Container className="my-4 error-page-content">
          <Row>
            <Col>
              <h1 className="display-1">404</h1>
              <p>Nie znaleziono strony.</p>
              <Button className="btn-success">
                <Link to="/">Powrót</Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
