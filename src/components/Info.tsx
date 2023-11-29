import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Info = ({ word, gues }: { word: string | null; gues: string }) => {
  return (
    <div>
      <h3>{gues}</h3>
      {word}
    </div>
  );
};

export default Info;
