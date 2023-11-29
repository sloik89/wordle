import React, { useEffect } from "react";
import Row from "./Row";

const Grid = ({
  gueses,
  turn,
  curentGueses,
}: {
  gueses: [];
  turn: number;
  curentGueses: string;
}) => {
  console.log(gueses);

  return (
    <div className="grid">
      {gueses.map((elem, idx) => {
        return <Row key={idx} guess={elem} />;
      })}
    </div>
  );
};

export default Grid;
