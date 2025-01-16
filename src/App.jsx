import React, { useState } from "react";

import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [counter, setCounter] = useState(0)

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    color !== backgroundColor ? setCounter(counter + 1) : null
};

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h1>{counter}</h1>,
      {COLORS.map((color) => (

        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}

        </button>
      ))}

    </div>
  );
}

export default App;
