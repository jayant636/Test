import React from "react";

const Cards = (props) => {
  const cards = props.tours;
  return (
    <div className="max-h w-[370px]  p-[1rem] flex flex-col ">
      <img
        src={cards.image}
        alt="Nothing"
        className="w-[350px] aspect-square"
      ></img>
      <h6>{cards.price}</h6>
      <h5>{cards.name}</h5>
      <p>{cards.info}</p>
    </div>
  );
};

export default Cards;
