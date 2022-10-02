import React from "react";
const Banner = () => {
  return (
    <figure>
      <picture>
        <source srcSet="./setting-up-dev-environment-react-vite-tailwind.webp" />
        <img
          src="./setting-up-dev-environment-react-vite-tailwind.webp"
          width="730"
          height="487"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
          className="mx-auto"
          alt="Setting Up Dev Environment with React, Vite, Tailwind"
        />
      </picture>
    </figure>
  );
};

export default Banner;
