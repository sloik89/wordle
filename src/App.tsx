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
  const [data, setData] = useState<Tdata | null>(null);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((json) => {
        const random = Math.floor(Math.random() * json.solutions.length);
        setData(json.solutions[random]);
      });
  }, []);
  return (
    <div className="worddle">
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
