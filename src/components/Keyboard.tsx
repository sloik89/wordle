import React, { useState, useEffect } from "react";
import { createKeybord } from "../utilis/createKeyboard";
import useWordle from "../hooks/useWordle";
import Info from "./Info";
const Keyboard = ({ word }: { word: string | null }) => {
  const [keybord, setKeyboard] = useState<string[]>(createKeybord());
  const { handleEvents, currentGuess } = useWordle(word);
  const handleClick = (letter: string) => {
    handleEvents({ key: letter });
  };
  useEffect(() => {
    window.addEventListener("keyup", handleEvents);
    return () => {
      removeEventListener("keyup", handleEvents);
    };
  }, [handleEvents]);
  return (
    <>
      {word && <Info word={word} gues={currentGuess} />}
      <div className="keyboard">
        {keybord.map((elem, idx) => {
          return (
            <button onClick={() => handleClick(elem)} className="btn" key={idx}>
              {elem}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Keyboard;
