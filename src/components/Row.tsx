import React from "react";

const Row = ({ guess }) => {
  console.log(guess);
  if (guess) {
    return (
      <div className="row past">
        {guess.map((elem, idx) => {
          return (
            <div key={idx} className={elem.color}>
              {elem.letter}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
