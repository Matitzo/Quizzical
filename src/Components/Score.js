import React from "react";

export default function Score(props) {
  function playAgain() {
    props.playAgain();
    props.handleCheck();
  }

  function newGame() {
    props.newGame((prevData) => !prevData);
    props.handleCheck();
  }

  function score(props) {
    let score = 0;
    props.data.map((quest) => (score += quest.score));
    return score;
  }

  function commentStyle(score) {
    if (score === 3 || score === 4) {
      return { color: "lightgreen" };
    }
    if (score < 3) {
      return { color: "darkred" };
    }
    return { color: "gold" };
  }

  function emoji(score) {
    if (score === 3 || score === 4) {
      return "Good job 👍🏼";
    } else if (score < 3) {
      return "You can do better 🙁";
    } else {
      return "You are the best 💪🏼";
    }
  }

  return (
    <div className="score">
      {props.checkAnswers && (
        <p className="score-comment" style={commentStyle(score(props))}>
          <strong>{score(props)}/5</strong>
          <br></br>
          {emoji(score(props))}
        </p>
      )}

      {!props.checkAnswers ? (
        <button className="btn-check-answers" onClick={props.handleCheck}>
          Check
        </button>
      ) : (
        <div>
          <button className="btn-play-again" onClick={playAgain}>
            Play again
          </button>
          <button className="btn-new-game" onClick={newGame}>
            New Game
          </button>
        </div>
      )}
    </div>
  );
}
