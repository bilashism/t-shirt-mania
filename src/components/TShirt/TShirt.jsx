import React from "react";

const TShirt = ({ tshirt, handleTshirt }) => {
  const { _id, picture, name, price } = tshirt;
  // console.log(props);
  return (
    <article className="p-4 text-center bg-slate-300">
      <figure>
        <picture>
          <img
            src={picture}
            alt={name}
            width="260"
            height="320"
            className="mx-auto object-cover h-80"
          />
        </picture>
      </figure>
      <div>
        <h2>{name}</h2>
        <p>price: ${price}</p>
        <p>
          <button
            className="bg-slate-900 text-white p-3"
            type="button"
            onClick={() => {
              handleTshirt(tshirt);
            }}>
            buy this
          </button>
        </p>
      </div>
    </article>
  );
};

export default TShirt;
