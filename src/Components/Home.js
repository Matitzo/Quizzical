import React from "react";
import categories from "../data";

export default function Home(props) {
  function GetCategories() {
    return (
      <form className="categories">
        <h3>Choose category</h3>
        <select id="categories-category" onChange={(e) => handleClick(e)}>
          {categories.map((category) => {
            return (
              <option
                value={category.id}
                selected={category.id == props.id ? "selected" : ""}
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </form>
    );
  }

  function handleClick(e) {
    if (e.target.value !== "0") {
      props.category(e.target.value);
    } else {
      props.category(``);
    }
    console.log(e.target.value);
  }

  return (
    <div className="home">
      <h1>Quizzcal</h1>
      <h3>Prepare to face the hardest quiz in your life !</h3>
      <GetCategories />
      <button className="home--button" onClick={props.getQuiz}>
        Start quiz
      </button>
    </div>
  );
}
