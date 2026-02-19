import { useState, type SetStateAction } from "react";

import "./App.css";

function App() {
  const [myName, setMyName] = useState("Inga");
  const [submit, setSubmit] = useState("");

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setMyName(e.target.value);
  }
  function submitted(event: { preventDefault: () => void }) {
    event.preventDefault();
    setSubmit("submitted");
  }
  function changeColor() {}

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
      <div className="stuff" style={{ backgroundColor: "red" }}>
        {/* ath hér að breyta background á div með því að smella á takka */}
        <button onClick={changeColor}>Party</button>
      </div>
    </>
  );
}

export default App;
