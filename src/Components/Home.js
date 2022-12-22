import React from "react";

export default function Home(props) {
  return (
    <div className="home">
      <h1>Quizzcal</h1>
      <p>Prepare to face the hardest quiz in your life !</p>
      <button className="home--button" onClick={props.getQuiz}>
        Start quiz
      </button>
    </div>
  );
}
