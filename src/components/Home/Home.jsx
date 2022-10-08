import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";

const Home = () => {
  const tshirtsData = useLoaderData();
  const tshirts = [...tshirtsData];
  const [cart, setCart] = useState([]);
  // handle added item
  const handleTshirt = tshirt => {
    const isExisting = cart.find(item => tshirt._id === item._id);
    if (isExisting) {
      alert("already added");
      return;
    }
    const newCart = [...cart, tshirt];
    setCart(newCart);
  };
  // remove tshirts
  const handleRemoveTshirts = tshirt => {
    const remainingTshirt = cart.filter(item => tshirt._id !== item._id);
    setCart(remainingTshirt);
  };
  return (
    <main className="">
      <div className="grid lg:grid-cols-12 gap-8 container mx-auto">
        <div className="col-span-9">
          <h2>Get yours now</h2>
          <div className="grid lg:grid-cols-3 gap-x-4 gap-y-8">
            {tshirts.map(product => (
              <TShirt
                key={product._id}
                tshirt={product}
                handleTshirt={handleTshirt}></TShirt>
            ))}
          </div>
        </div>
        <div className="col-span-3 order-first lg:order-none">
          <h2>cart</h2>
          <Cart cart={cart} handleRemoveTshirts={handleRemoveTshirts}></Cart>
        </div>
      </div>
    </main>
  );
};

export default Home;
