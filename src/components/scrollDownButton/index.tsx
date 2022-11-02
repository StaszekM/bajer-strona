import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { BAJER_WEBSITE_NAVBAR_HEIGHT } from "../../constants";
import "./styles.css";

export function ScrollDownButton({
  target,
  className,
}: {
  target: string;
  className?: string;
}) {
  const handleScrollDownButtonClick = useCallback(() => {
    const element = document.getElementById(target);
    if (!element) {
      return;
    }

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      BAJER_WEBSITE_NAVBAR_HEIGHT;

    window.scrollTo({ top: y });
  }, [target]);

  return (
    <Button
      onClick={handleScrollDownButtonClick}
      variant="light"
      className={`scroll-down-button ${className ? className : ""}`}
    >
      <FontAwesomeIcon icon={faAngleDoubleDown} />
    </Button>
  );
}
