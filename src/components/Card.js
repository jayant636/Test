import React from "react";
import Cards from "./Cards";

const Card = (props) => {
  const tour = props.tour;

  return (
    <div className="max-w-[1300px] flex justify-center items-center flex-wrap">
      {tour.map((tours) => {
        return (
          <div>
            <Cards tours={tours} id={props.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
