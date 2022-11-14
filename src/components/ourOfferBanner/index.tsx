import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "globalStyles.css";
import "./styles.css";

export function OurOfferBanner() {
  return (
    <div className="our-offer-banner">
      <Container className="py-5">
        <Row>
          <Col md={12} className=" text-center">
            <h2 className="text-uppercase pb-4">nasza oferta</h2>
            <div className="mr-1 text-center ">
              <p>
                Dobra zabawa nas definiuje i wszystko, co robimy, robimy dla
                dobrej zabawy. Nie jesteśmy organizatorami imprez. Jesteśmy
                pasjonatami. Każdemu naszemu wydarzeniu nadajemy wyjątkowego,
                studenckiego charakteru. Zobacz, jak to robimy.
              </p>
            </div>
            <Button variant="outline-light">
              <Link to="/offer" className=" text-uppercase center-block m-4">
                Czytaj dalej
              </Link>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12} className=" text-center mt-5">
            <h2 className="text-uppercase pb-4 pt-4">
              Wynajmij salę na własne porzeby
            </h2>
            <p className="mb-0">
              <span className="fw-bold">
                Już dzisiaj możesz zaplanować swoje wydarzenie w naszym Klubie.
              </span>
            </p>
            <p>
              Istnieje możliwość wynajęcia sali tanecznej do zorganizowania
              Twojego prywatnego przedsięwzięcia. Urodziny, szkolenia, imprezy
              inauguracyjne, warsztaty, wykłady i prelekcje? Dla nas nieważny
              jest powód, oddajemy Klub w Twoje ręce. Skontaktuj się z nami.
              Chętnie odpowiemy na wszystkie Twoje pytania, pomożemy dopełnić
              formalności, a Ty możesz już zapraszać gości.
            </p>
            <Link to="/offer" className="mt-5 mb-4">
              <Button variant="success" className="text-uppercase">
                dowiedz się więcej
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
