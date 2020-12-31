import { useState } from "react";

function CodingQn(props) {
  const { content, checkAnswer } = props;
  const [answer, setAnswer] = useState("");
  const evaluateAnswer = () => {
    const answerCorrect = content.answer.includes(answer);
    checkAnswer(content, answerCorrect);
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-label="Answer"
        aria-describedby={content.title}
        placeholder="Type in your code"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button className="btn btn-primary" type="button" id={content.title} onClick={evaluateAnswer}>
        Submit
      </button>
    </div>
  );
}

export default CodingQn;
