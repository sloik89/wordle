import { useState, useEffect } from "react";

import "./App.css";
const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
type Tdata = {
  id: number;
  word: string;
};
function App() {
  const [keybord, setKeyboard] = useState<string[]>(
    new Array(letters.length + 2).fill("").map((elem, idx) => {
      if (idx === letters.length + 2 - 1) {
        elem = "enter";
        return elem;
      } else if (idx === letters.length) {
        elem = "x";
        return elem;
      }
      elem = letters[idx];
      return elem;
    })
  );
  const [data, setData] = useState<Tdata[]>([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((json) => {
        const random = Math.floor(Math.random() * json.solutions.length);
        console.log(random);
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
