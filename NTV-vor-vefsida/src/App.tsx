//2. tími 24. feb- Búa til card og setja inn props(data)
// búa til component button

import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout/layout";
import Input from "./components/input";
import PartyBox from "./components/partyBox";
import Btn from "./components/btn.tsx";
import { Card } from "./components/ui/card.tsx";

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

        <div>
          <Btn name="click me" />
        </div>

        <Card />

        <PartyBox />
      </Layout>
    </>
  );
}

export default App;
