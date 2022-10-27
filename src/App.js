import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const names = [
  "Gustavo",
  "Gerly",
  "Casssandra",
  "Corwin",
  "Mido",
  "Cari",
  "Nick",
];

function App() {
  const [myName, setMyName] = useState("Mido");
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{myName} is pretty cool.</p>
        {names.map((name) => (
          <button key={name} onClick={() => setMyName(name)}>
            {name}
          </button>
        ))}

        <button onClick={() => setMyName("Emily")}>Emily</button>
        <button onClick={() => setMyName("Ryan")}>Ryan</button>
        <button onClick={() => setMyName("Mido")}>Mido</button>
        <p> You Clicked the button {counter} times. </p>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(0)}>REST</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
