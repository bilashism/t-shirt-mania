import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";
const Auntie = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="border">
      <h2>Auntie</h2>
      <p>house </p>
      <p>money: {money}</p>
      <button onClick={() => setMoney(money + 100)}>increase</button>
      <section>
        <Cousin></Cousin>
        <Cousin></Cousin>
      </section>
    </div>
  );
};

export default Auntie;
