import { useState, useEffect, MouseEventHandler } from "react";
import { createKeybord } from "./utilis/createKeyboard";
import "./App.css";
import Info from "./components/Info";
import Wordle from "./components/Wordle";
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

      <Wordle word={word} />
    </div>
  );
}

export default App;
