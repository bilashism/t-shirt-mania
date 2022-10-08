import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>money: {money}</p>
      <button onClick={() => setMoney(money - 100)}>decrease</button>
    </div>
  );
};

export default Uncle;
