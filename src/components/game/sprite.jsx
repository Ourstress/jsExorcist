import ghost1 from "./assets/cute_ghost.png";
import ghost2 from "./assets/cute_ghost_2.png";
import ghost3 from "./assets/cute_ghost_3.png";
import React, { memo } from "react";
import { animated } from "react-spring";

function areEqual(prevProps, nextProps) {
  return prevProps.dataBsToggle === nextProps.dataBsToggle;
}

function Sprite(props) {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  const ghostImages = [ghost1, ghost2, ghost3];
  const getGhostImg = () => ghostImages[getRandomInt(3)];
  const { dataBsToggle, dataBsTarget, clickFn, springProps } = props;
  return (
    <animated.button
      type="button"
      style={{
        width: "min-content",
        backgroundColor: "transparent",
        border: "none",
        cursor: "default",
        ...springProps,
      }}
      onClick={clickFn}
    >
      <img
        src={getGhostImg()}
        style={{
          width: "10%",
          minWidth: "80px",
          margin: `${getRandomInt(3) * 10}px`,
          transform: `rotate(${Math.random() * 360}deg)`,
          cursor: "pointer",
        }}
        aria-label="ghost"
        alt="ghost"
        data-bs-toggle={dataBsToggle}
        data-bs-target={dataBsTarget}
      />
    </animated.button>
  );
}

export default memo(Sprite, areEqual);
