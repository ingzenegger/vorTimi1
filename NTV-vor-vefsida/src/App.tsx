import { useState, type SetStateAction } from "react";

import "./App.css";

function App() {
  //for the form:
  const [myName, setMyName] = useState("Inga");
  const [submit, setSubmit] = useState("");

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setMyName(e.target.value);
  }
  function submitted(event: { preventDefault: () => void }) {
    event.preventDefault();
    setSubmit("submitted");
  }

  //for the little box changing colours... just because I can
  const colors: string[] = [
    "red",
    "blue",
    "aqua",
    "orange",
    "yellow",
    "green",
    "purple",
    "pink",
  ];
  const [colorIndex, setColourIndex] = useState(0);
  const cycleColor = () => {
    setColourIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <>
      <h2>Hello World!</h2>
      <div>{myName}</div>
      <form onSubmit={submitted}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={handleChange}
        />
        <input type="email" placeholder="enter your email" />
        <input type="submit" name="" id="" />
        <p>{submit}</p>
      </form>
      <div className="party" style={{ backgroundColor: colors[colorIndex] }}>
        {/* ath hér að breyta background á div með því að smella á takka */}
        <button onClick={cycleColor}>Party!</button>
      </div>
    </>
  );
}

export default App;
