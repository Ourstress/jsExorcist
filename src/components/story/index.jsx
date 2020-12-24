import { useTransition, animated } from "react-spring";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";

function Story(props) {
  const {
    currentChapter,
    storyDisplay,
    toggleStoryDisplay,
    advanceChapter,
    goPreviousChapter,
  } = props;
  const transitions = useTransition(storyDisplay, null, {
    enter: { opacity: 0.9 },
    leave: { opacity: 0 },
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          className="card text-black mb-2 p-3 rounded-3 bg-white"
          style={{
            ...props,
          }}
          key={key}
        >
          <section className="d-flex justify-content-between">
            <h5 className="card-title">{currentChapter.name}</h5>
            {/* eslint-disable-next-line */}
            <a className="btn p-0" href="#" onClick={() => goPreviousChapter()}>
              <ChevronLeft />
            </a>
            {/* eslint-disable-next-line */}
            <a className="btn p-0" href="#" onClick={() => advanceChapter()}>
              <ChevronRight />
            </a>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => toggleStoryDisplay(!storyDisplay)}
            ></button>
          </section>
          <p className="card-text">{currentChapter.story}</p>
        </animated.div>
      )
  );
}

export default Story;
