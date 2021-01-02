import { useState } from "react";
import { UTILITYFNS } from "../../../data/constants";

const acorn = require("acorn");

function CodingQn(props) {
  const { content, checkAnswer, setFeedback } = props;
  const [answer, setAnswer] = useState("");

  const evaluateAnswer = () => {
    let parsedAnswer;
    let answerCorrect;
    try {
      parsedAnswer = acorn.parse(answer, { ecmaVersion: 2020 });
      const [checkFunction0, parameter0, checkValue0] = content.answer[0].split(",");
      const [checkFunction1, parameter1, checkValue1] = content.answer[1].split(",");
      const [checkFunction2, parameter2, checkValue2] = content.answer[2].split(",");
      answerCorrect = parsedAnswer.body.some((item) => {
        return (
          UTILITYFNS[checkFunction0](item, parameter0) === checkValue0 &&
          UTILITYFNS[checkFunction1](item, parameter1) === checkValue1 &&
          UTILITYFNS[checkFunction2](item, parameter2) === checkValue2
        );
      });
      const feedback = answerCorrect ? "Well done!" : "Try again!";
      setFeedback(feedback);
    } catch (e) {
      parsedAnswer = e.message;
      setFeedback(e.message);
      answerCorrect = false;
    }
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
