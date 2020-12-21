import { useTransition, animated } from "react-spring";

function Story(props) {
  const { currentChapter, storyDisplay, toggleStoryDisplay } = props;
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
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 className="card-title">Card title</h5>
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
