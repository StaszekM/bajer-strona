import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import bajerLogo from "../../assets/bajer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSpotify,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div>
      <footer className="footer py-3">
        <h2 className="text-uppercase text-center p-2">Śledź nas</h2>
        <Container className="h-100">
          <Row className="align-items-center h-100">
            <Col xs={12} md={3} className="my-3">
              <Image
                fluid
                className="mx-auto w-50 d-block"
                src={bajerLogo}
                alt="logo Bajeru"
              />
              <address className="text-center">
                ul. Edwarda Wittiga 6 Akademik T‑15 51‑628 Wrocław
              </address>
            </Col>
            <Col xs={12} md={6} className="my-3">
              <div className="social-icons text-center">
                <a
                  href="https://www.facebook.com/Klub.Studencki.Bajer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="light"
                    className="social-icon-button facebook mx-1"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/klub.studencki.bajer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="light"
                    className="social-icon-button instagram mx-1"
                  >
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </Button>
                </a>
                <a
                  href="https://open.spotify.com/user/klubstudenckibajer?si=ri5LY5koQrKIG5bkSbEi1w"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="light"
                    className="social-icon-button spotify mx-1"
                  >
                    <FontAwesomeIcon icon={faSpotify} />
                  </Button>
                </a>
              </div>
            </Col>
            <Col xs={12} md={3} className="my-3">
              <Link to="/contact" className=" d-block  text-dark">
                <Button variant="light" className="text-uppercase w-100">
                  kontakt
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="subfooter text-center text-md-end">
        <Container>
          <span>
            &copy; Bajer 2022 | Created by Kamil Żmijowski & Stanisław Markowski
          </span>
        </Container>
      </div>
    </div>
  );
}
