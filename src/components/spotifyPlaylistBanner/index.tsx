import { Button, Col, Container, Row } from "react-bootstrap";
import "../../globalStyles.css";
import "./styles.css";

export function SpotifyPlaylistBanner() {
  return (
    <div className="spotify-playlist-banner py-3 d-flex align-items-center">
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col xs={12} md={5} lg={6}>
            <p className="m-0 text-center text-md-left">
              Zobaczcie naszą niepowtarzalną imprezową składankę.
            </p>
          </Col>
          <Col xs={12} md={3} lg={3} className="text-center text-md-right">
            <span className="d-block bajer-font hashtag-ale-bajer">
              #AleBajer
            </span>
          </Col>
          <Col xs={12} md={4} lg={3} className=" text-center text-md-left">
            <Button variant="outline-light" className="btn-md btn-lg-space">
              <a
                href="https://open.spotify.com/playlist/7x0EzxGOPef8DH4sh3zEoo"
                target="_blank"
                rel="noreferrer"
                className="text-light text-uppercase"
              >
                Zobacz playlistę
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
