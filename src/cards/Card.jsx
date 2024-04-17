import React from "react";
import "./Card.css";
import gaz_plita from "../images/gaz_plita.avif";

function Card() {
  return (
    <div className="products__cards">
      <div className="container">
        <h1>Shop all latest offers and innovations</h1>
        <div className="product__cards">
          <div className="product__card">
            <div>
              <img src={gaz_plita} alt="gazplita" className="gaz_plita" />
            </div>
            <p className="product__card__desc">
              Bespoke 6 cu.ft.Smart-In Gas Range width Smart Oven Camera{" "}
            </p>
            <div className="card-display">
              <div className="product__price"> save $600</div>
              <div className="card-price"> From $1499</div>
            </div>
            <button className="card-btn">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
