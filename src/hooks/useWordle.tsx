import React, { useEffect, useState, useCallback } from "react";

const useWordle = (word: string | null) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...new Array(6)]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g. [{key:'a',color:'yellow'}]
  const formatGuess = () => {
    console.log("formating gues ", currentGuess);
    let solution: string[] | null[] = word!.split("");
    let formatedGues = currentGuess.split("").map((elem) => {
      return { letter: elem, color: "grey" };
    });
    // turn green if letters is in right place
    formatedGues = formatedGues.map((elem, idx) => {
      if (elem.letter === solution[idx]) {
        solution[idx] = null;
        return { ...elem, color: "green" };
      }
      return elem;
    });
    // turn yellow if letter is in word
    formatedGues.forEach((elem, idx) => {
      if (solution.includes(elem.letter) && elem.color !== "green") {
        formatedGues[idx].color = "yellow";
        solution[solution.indexOf(elem.letter)] = null;
      }
    });
    return formatedGues;
  };
  //   add a new guess to hte guesses state
  //   update the isCorrect state if the guess is correct
  //  add one to the turn state
  const addNewGuess = (formated: { letter: string; color: string }[]) => {
    console.log(word);
    if (word === currentGuess) {
      setIsCorrect(true);
    }
    setGuesses((prev) => {
      let newGuesses = [...prev];
      newGuesses[turn] = formated;
      return newGuesses;
    });
    setHistory((prev) => {
      return [...prev, currentGuess];
    });
    setTurn((prev) => prev + 1);
    setCurrentGuess("");
  };

  const handleEvents = ({ key }: { key: string }) => {
    const userKey = key.toLowerCase();

    if (userKey === "enter") {
      // only add gues if turn is less than 5
      if (turn > 5) {
        console.log("you used all your guesses");
        return;
      }
      // do not allow duplicatate words
      if (history.includes(currentGuess)) {
        console.log("you already tried this word");
        return;
      }

      // check word is 5 chars long
      if (currentGuess.length !== 5) {
        console.log("word must be 5 chars long");
        return;
      }
      const formated = formatGuess();
      addNewGuess(formated);
    }
    if (userKey === "backspace" || userKey === "back") {
      console.log("jestem");
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (/^[a-z]$/.test(userKey)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + userKey);
      }
    }
  };

  useEffect(() => {
    console.log(currentGuess);
  }, [currentGuess]);
  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleEvents,
  };
};

export default useWordle;
