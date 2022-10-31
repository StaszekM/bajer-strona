import { Container, Row, Col } from "react-bootstrap";
import { PersonAvatar } from "../personAvatar";
import "./styles.css";

type SinglePersonForAvatar = { title: string; subtitle?: string; src?: string };

type ManagementPhotoGalleryBannerProps = {
  president: SinglePersonForAvatar;
  otherMembers: SinglePersonForAvatar[];
};

export function ManagementPhotoGalleryBanner(
  props: ManagementPhotoGalleryBannerProps
) {
  return (
    <div className="management-photo-gallery-container">
      <Container className="mt-4 py-4">
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
          <Col>
            <PersonAvatar {...props.president} />
          </Col>
        </Row>
        <Row className="mt-3">
          {props.otherMembers.map((member) => (
            <Col xs={12} sm={6} lg key={member.title + member.subtitle}>
              <PersonAvatar {...member} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
