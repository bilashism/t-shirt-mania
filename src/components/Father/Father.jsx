import React from "react";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import Brother from "../Brother/Brother";
const Father = () => {
  return (
    <div className="border">
      <h2>Father</h2>
      <p>house: </p>
      <section>
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Father;
