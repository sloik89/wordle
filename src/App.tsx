import { useState, useEffect } from "react";
import { createKeybord } from "./utilis/createKeyboard";
import "./App.css";
const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
type Tdata = {
  id: number;
  word: string;
};
function App() {
  const [keybord, setKeyboard] = useState<string[]>(createKeybord());
  const [word, setWord] = useState<string | null>(null);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((json) => {
        const random = Math.floor(Math.random() * json.solutions.length);
        setWord(json.solutions[random].word);
      });
  }, []);
  return (
    <div className="worddle">
      <p>{word}</p>
      <div className="keyboard">
        {keybord.map((elem, idx) => {
          return (
            <button className="btn" key={idx}>
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
