import React from "react";

export default function Quiz(props) {
  function checkId(quest, answer, checkAnswers) {
    if (checkAnswers & (quest.correct_answer === answer.answer)) {
      if (checkAnswers & (quest.correct_answer === quest.selectedAnswer)) {
        quest.score = 1;
      }
      return "selected-good";
    } else if (checkAnswers & (quest.selectedAnswer === answer.answer)) {
      return "selected-wrong";
    }
  }

  function checkClassName(quest, answer, checkAnswers) {
    if (quest.selectedAnswer === answer.answer) {
      return "quest--answers--answer selected";
    } else {
      return "quest--answers--answer";
    }
  }

  return props.data.map((quest) => (
    <div className="quest">
      <h3 className="quest--question">{quest.question}</h3>
      <div className="quest--answers">
        {quest.answers.map((answer) => (
          <button
            className={checkClassName(quest, answer, props.checkAnswers)}
            onClick={!props.checkAnswer && props.hadleSelect}
            id={checkId(quest, answer, props.checkAnswers)}
            value={answer.answer}
            name={quest.question}
          >
            {answer.answer}
          </button>
        ))}
      </div>
      <div className="line"></div>
    </div>
  ));
}
