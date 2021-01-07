import { useState } from "react";
import CodingQn from "./codingQn";

function Question(props) {
  const { content, checkAnswer, setFeedback } = props;
  const [answer, setAnswer] = useState("");

  const evaluateAnswer = () => {
    const answerCorrect = content.answer.includes(answer.toLowerCase());
    checkAnswer(content, answerCorrect);
    setAnswer("");
    const feedback = answerCorrect ? "Well done!" : "Try again!";
    setFeedback(feedback);
  };
  return content.type && content.type === "code" ? (
    <CodingQn {...props} />
  ) : (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-label="Answer"
        aria-describedby={content.title}
        placeholder="answer here!"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button className="btn btn-primary" type="button" id={content.title} onClick={evaluateAnswer}>
        Submit
      </button>
    </div>
  );
}

export default Question;
