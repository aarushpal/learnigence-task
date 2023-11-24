import React from "react";

const Card = ({ name, src }) => {
  return (
    <div className="relative h-32 w-44 mx-10 my-2 hover:cursor-pointer">
      <img
        className="object-cover h-full w-full rounded-2xl"
        src={src}
        alt="card"
      />
      <div className="absolute bottom-0 left-0 p-2 bg-white bg-opacity-75 rounded-br-lg">
        <span className="text-black font-bold">{name}</span>
      </div>
    </div>
  );
};

export default Card;
