import React, { useContext } from "react";
import Special from "../Special/Special";
import { RingContext } from "../Grandpa/Grandpa";
const Myself = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div className="border">
      <h2>Myself</h2>
      <button onClick={() => setHouse(house + 100)}>increase</button>
      <Special></Special>
    </div>
  );
};

export default Myself;
