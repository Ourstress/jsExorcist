import ghost1 from "./images/cute_ghost.png";
import ghost2 from "./images/cute_ghost_2.png";
import ghost3 from "./images/cute_ghost_3.png";

function Sprite(props) {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  const ghostImages = [ghost1, ghost2, ghost3];
  const getGhostImg = () => ghostImages[getRandomInt(3)];
  const { dataBsToggle, dataBsTarget } = props;
  return (
    <button
      type="button"
      style={{ width: "min-content", backgroundColor: "white", border: "none" }}
    >
      <img
        src={getGhostImg()}
        style={{
          width: "10%",
          minWidth: "80px",
          margin: `${getRandomInt(3) * 10}px`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
        aria-label="ghost"
        alt="ghost"
        data-bs-toggle={dataBsToggle}
        data-bs-target={dataBsTarget}
      />
    </button>
  );
}

export default Sprite;
