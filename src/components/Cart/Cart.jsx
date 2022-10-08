import React from "react";

const Cart = ({ cart, handleRemoveTshirts }) => {
  return (
    <div>
      <h2>Products in the cart: {cart.length}</h2>
      <div className="">
        {cart.map(tshirt => (
          <div key={tshirt._id}>
            <h3>
              {tshirt.name}{" "}
              <button onClick={() => handleRemoveTshirts(tshirt)} type="button">
                ❌
              </button>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
