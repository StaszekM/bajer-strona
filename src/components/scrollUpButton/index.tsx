import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

export function ScrollUpButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScrollUpButtonClick = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const updateShowState = useCallback(() => {
    setShowButton(window.scrollY > 700);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateShowState);

    updateShowState();

    return () => {
      window.removeEventListener("scroll", updateShowState);
    };
  }, [updateShowState]);

  return (
    <Button
      variant="light"
      size="lg"
      onClick={handleScrollUpButtonClick}
      className={`${
        !showButton ? "hidden" : "visible"
      } scroll-up-button mb-5 me-5`}
    >
      <FontAwesomeIcon icon={faAngleDoubleUp} />
    </Button>
  );
}
