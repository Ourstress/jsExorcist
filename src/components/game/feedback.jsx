import { useTransition, animated } from "react-spring";

function Feedback(props) {
  const { feedbackDisplay, setFeedbackDisplay } = props;

  const transitions = useTransition(feedbackDisplay, null, {
    enter: { opacity: 0.9 },
    leave: { opacity: 0 },
  });
  return (
    <>
      {!feedbackDisplay && (
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          aria-label="feedback"
          onClick={() => setFeedbackDisplay(!feedbackDisplay)}
        >
          Feedback
        </button>
      )}
      {transitions.map(
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
                <h5>Feedback</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setFeedbackDisplay(!feedbackDisplay)}
                ></button>
              </section>
              <section>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident.
              </section>
            </animated.div>
          )
      )}
    </>
  );
}

export default Feedback;
