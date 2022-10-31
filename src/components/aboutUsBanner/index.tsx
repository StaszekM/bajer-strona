import { Button, Col, Container, Row } from "react-bootstrap";

export function AboutUsBanner() {
  return (
    <Container className="my-4">
      <Row>
        <Col className="mx-auto text-center">
          <h2 className="text-uppercase">O klubie</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="mx-auto" style={{ textAlign: "justify" }}>
          Jesteśmy agendą kultury, która zajmuje się organizacją imprez
          tanecznych, koncertów, aktywności sportowych oraz innych inicjatyw
          kulturalno-rozrywkowych dla studentów. Ponadto bardzo aktywnie
          współpracujemy z innymi organizacjami, zapewniając na wydarzeniach
          oprawę muzyczną i zaplecze techniczne. Jeżeli, idąc przez kampus
          uczelni, słyszycie muzykę, widzicie tańczących ludzi, to tam na pewno
          nas spotkacie. W 2018 roku Klub Studencki Bajer świętował jubileusz
          40-lecia działalności przy Politechnice Wrocławskiej. Jako jedna z
          nielicznych organizacji działających przy Politechnice możemy się
          pochwalić tak długą tradycją funkcjonowania. Wydarzenia odbywają się w
          siedzibie naszego klubu, w Domu Studenckim T-15 na osiedlu akademickim
          Wittigowo. Również ze względu na stale rosnące zainteresowanie coraz
          częściej organizowane działalności przenosimy poza mury akademika, w
          miejsca, gdzie możemy zaprosić jeszcze więcej studentów. Zapraszamy do
          stałego śledzenia naszych mediów społecznościowych, zamieszczamy tam
          wszystkie informacje na temat planowanych inicjatyw.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="mx-auto text-center">
          <Button className="btn-success text-uppercase">Czytaj dalej</Button>
        </Col>
      </Row>
    </Container>
  );
}
