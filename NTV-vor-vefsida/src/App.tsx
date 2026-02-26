//2. tími 24. feb- Búa til card og setja inn props(data)
// búa til component button

import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout/layout";
import Input from "./components/input";

import Btn from "./components/btn.tsx";
import MyCard from "./components/Layout/myCard.tsx";

function App() {
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Layout>
        <h2>Hello World!</h2>
        <div className="form">
          <div>{myName}</div>
          <Input
            value={myName}
            onChange={(e) => setMyName(e.target.value)}
            placeholder="Type your name"
            type="text"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            type="email"
          />
          <button onClick={() => alert("submitted:" + email)}>Submit</button>
        </div>

        <div className="my-btn">
          <Btn name="click me" />
        </div>
        <MyCard />
        <MyCard />
      </Layout>
    </>
  );
}

export default App;
