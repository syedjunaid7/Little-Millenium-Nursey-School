import React from "react";
import "./Card.scss";
import cardData from "./cardData";

const Card = () => {
  return (
    <div className="main-card-box">
      {cardData?.map((item, index) => (
        <div className="portrait-card" key={index} data-aos="zoom-out">
          <img src={item.imgPath} alt="Card" className="card-image" />
          <h3 className="card-heading">{item.title}</h3>
          <p>{item.detail}</p>
          <button className="card-button">ReadMore</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
