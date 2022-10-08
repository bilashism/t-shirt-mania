import React, { createContext, useState } from "react";
import Auntie from "../Auntie/Auntie";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
const ring = "diamond ring";
export const RingContext = createContext();
export const MoneyContext = createContext();
const Grandpa = () => {
  const [house, setHouse] = useState(10);
  const [money, setMoney] = useState(100);
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="border">
          <h2>Grandpa</h2>
          <section className="flex">
            <Father></Father>
            <Uncle></Uncle>
            <Auntie></Auntie>
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default Grandpa;
