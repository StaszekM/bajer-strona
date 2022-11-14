import { Image } from "react-bootstrap";
import bajerAnon from "assets/BajerAnon.png";
import "./styles.css";

type PersonAvatarProps = {
  src?: string;
  title: string;
  subtitle?: string;
};

export function PersonAvatar({ src, title, subtitle }: PersonAvatarProps) {
  return (
    <div className="avatar-container">
      <Image src={src ?? bajerAnon} fluid className="avatar-image" />
      <h4 className="mt-3">{title}</h4>
      {subtitle && <h5>{subtitle}</h5>}
    </div>
  );
}
