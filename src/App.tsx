import { useState, useEffect, MouseEventHandler } from "react";
import { createKeybord } from "./utilis/createKeyboard";
import "./App.css";
import Wordle from "./components/Info";
import Keyboard from "./components/Keyboard";
import useWordle from "./hooks/useWordle";
function App() {
  const [word, setWord] = useState<string | null>(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((json) => {
        const random = Math.floor(Math.random() * json.solutions.length);
        setWord(json.solutions[random].word);
      });
  }, [setWord]);
  // adding keyup event

  return (
    <div className="worddle">
      <h1>Wordle (Lingo)</h1>

      <Keyboard word={word} />
    </div>
  );
}

export default App;
