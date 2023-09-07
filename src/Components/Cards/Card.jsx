import React from "react";
import "./Card.scss";
import cardData from "./cardData";

const Card = () => {
  return (
    <div className="main-card-box">
      {cardData?.map((item, index) => (
        <div className="portrait-card" key={index}>
          <img src={item.imgPath} alt="Card" className="card-image" />
          <h3 className="card-heading">{item.title}</h3>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
