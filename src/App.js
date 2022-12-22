import React from "react";
import Quiz from "./Components/Quiz.js";
import Home from "./Components/Home.js";
import Score from "./Components/Score.js";

export default function App() {
  const [data, setData] = React.useState(getApi);
  const [quiz, setQuiz] = React.useState(false);
  const [checkAnswers, setCheck] = React.useState(false);

  function getQuiz() {
    setQuiz(!quiz);
  }

  function handleSelect(event) {
    !checkAnswers &&
      setData((prevData) =>
        prevData.map((quest) => {
          return {
            ...quest,
            selectedAnswer:
              quest.question === event.target.name
                ? event.target.value
                : quest.selectedAnswer,
          };
        })
      );
  }

  function handleCheck() {
    setCheck((prevData) => !prevData);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function getApi() {
    fetch(`https://opentdb.com/api.php?amount=5`)
      .then((res) => res.json())
      .then((data) => {
        const question = data.results.map((result) => {
          const answersToShuffle = result.incorrect_answers;
          answersToShuffle.push(result.correct_answer);
          const answers = shuffleArray(answersToShuffle);
          const answersObject = answers.map((answer) => ({ answer: answer }));
          return {
            question: result.question,
            correct_answer: result.correct_answer,
            answers: answersObject,
            selectedAnswer: {},
            score: 0,
          };
        });

        return setData(question);
      });
  }

  if (quiz && data) {
    return (
      <div className="container">
        <Quiz
          data={data}
          hadleSelect={handleSelect}
          checkAnswers={checkAnswers}
        />
        <Score
          data={data}
          getQuiz={getQuiz}
          checkAnswers={checkAnswers}
          handleCheck={handleCheck}
          newGame={getApi}
        />
      </div>
    );
  } else {
    return <Home getQuiz={getQuiz} />;
  }
}
