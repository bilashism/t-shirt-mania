import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div className="border">
      <h2>Special</h2>
      <p>{house}</p>
    </div>
  );
};

export default Special;
