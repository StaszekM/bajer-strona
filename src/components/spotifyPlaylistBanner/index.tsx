import { Button, Col, Container, Row } from "react-bootstrap";
import "../../globalStyles.css";
import "./styles.css";

export function SpotifyPlaylistBanner() {
  return (
    <div className="spotify-playlist-banner py-3 d-flex align-items-center">
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col xs={12} md={6}>
            <p className="m-0 text-center text-md-start">
              Zobaczcie naszą niepowtarzalną imprezową składankę.
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className="flex-column flex-md-row justify-content-center justify-content-md-end d-flex align-items-center"
          >
            <span className="d-inline bajer-font hashtag-ale-bajer me-md-4">
              #AleBajer
            </span>
            <a
              href="https://open.spotify.com/playlist/7x0EzxGOPef8DH4sh3zEoo"
              target="_blank"
              rel="noreferrer"
              className="text-light "
            >
              <Button
                variant="outline-light"
                className="btn-md btn-lg-space text-uppercase"
              >
                Zobacz playlistę
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
