import React from "react";
import FruitsEmoji from "./FruitDictionary";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [fruitData, setFruitData] = React.useState("");

  function helperFunction_ForInputValidation(value, color) {
    return (
      <div className="result" style={{ color: `${color}` }}>
        {value}
      </div>
    );
  }

  function clickHandler(e) {
    const fruitName = e.target.getAttribute("value");
    setFruitData(() => helperFunction_ForInputValidation(fruitName, "green"));
  }

  const FruitArray = Object.keys(FruitsEmoji);
  const dataElements = FruitArray.map((data) => {
    return (
      <div
        className="fruit"
        value={`${FruitsEmoji[data]}`}
        key={nanoid()}
        onClick={(e) => clickHandler(e)}
      >
        {data}
      </div>
    );
  });

  function changeHandler(e) {
    const inputValue = e.target.value.trim();

    for (let value in FruitsEmoji) {
      if (value === inputValue) {
        return setFruitData(() =>
          helperFunction_ForInputValidation(FruitsEmoji[value], "green")
        );
      } else {
        if (/^[a-zA-Z]+$/.test(inputValue) || /^\d+$/.test(inputValue)) {
          return setFruitData(() =>
            helperFunction_ForInputValidation(
              "Only emoji inputs are allowed !",
              "red"
            )
          );
        }
      }
    }

    return setFruitData(() =>
      helperFunction_ForInputValidation("No such fruit found!", "red")
    );
  }

  return (
    <div className="App">
      <header className="header">
        <label htmlFor="fruit-search-box">Know Your Fruit!</label>
        <input
          id="fruit-search-box"
          placeholder="Enter fruit emoji to know it's name"
          onChange={(e) => changeHandler(e)}
        />
      </header>
      <main className="main">
        <section className="result-box">{fruitData}</section>
        <section className="fruit-display">
          <h3>Fruits We know: </h3>
          <div className="fruits">{dataElements}</div>
        </section>
      </main>
      <footer className="footer">@Ashok Patel</footer>
    </div>
  );
}

export default App;
