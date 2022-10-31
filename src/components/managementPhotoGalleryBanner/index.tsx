import { Container, Row, Col } from "react-bootstrap";

export function ManagementPhotoGalleryBanner() {
  return (
    <Container className="my-4">
      <Row>
        <Col className="mx-auto text-center">
          <h2 className="text-uppercase">Członkowie</h2>
        </Col>
      </Row>
      <Row>
        <Col className="mx-auto text-center">
          <h5>
            Nasza grupa to kreatywni ludzie, dla których nie ma rzeczy
            niemożliwych.
          </h5>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="mx-auto">XD</Col>
      </Row>
    </Container>
  );
}
