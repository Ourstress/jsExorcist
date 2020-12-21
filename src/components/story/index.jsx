import { useState } from "react";
import waves from "../../assets/waves.png";
import { useTransition, animated } from "react-spring";

function Story(props) {
  const { currentChapter } = props;
  const [storyDisplay, toggleStoryDisplay] = useState(true);
  const transitions = useTransition(storyDisplay, null, {
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          className="card text-black"
          style={{ maxHeight: "25vh", ...props }}
          key={key}
        >
          <img
            src={waves}
            className="card-img"
            alt="waves"
            style={{ objectFit: "cover", opacity: 0.2, overflow: "hidden" }}
          />
          <div className="card-img-overlay">
            <section
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h5 className="card-title">Card title</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => toggleStoryDisplay(!storyDisplay)}
              ></button>
            </section>
            <p className="card-text">{currentChapter.story}</p>
          </div>
        </animated.div>
      )
  );
}

export default Story;
