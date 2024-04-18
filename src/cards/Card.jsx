import React from "react";
import "./Card.css";
import gaz_plita from "../images/gaz_plita.avif";

function Card() {
  let data = [
    {
      image:
        "https://www.samsung.com/us/home-appliances/ranges/electric/bespoke-6-3-cu-ft-smart-slide-in-electric-range-with-air-sous-vide-air-fry-in-matte-black-steel-nse6dg8500mtaa",
      desciption: " Bespoke 6 cu.ft.Smart-In Gas Range width Smart Oven Camera",
      price1: 600,
      price2: 1499,
      btn: "Buy now",
    },
    {
      image:
        "https://www.samsung.com/us/home-appliances/ranges/electric/bespoke-6-3-cu-ft-smart-slide-in-electric-range-with-air-sous-vide-air-fry-in-matte-black-steel-nse6dg8500mtaa",
      desciption: " Bespoke 6 cu.ft.Smart-In Gas Range width Smart Oven Camera",
      price1: 1100,
      price2: 2199,
      btn: "Buy now",
    },

    {
      image:
        "https://www.samsung.com/us/home-appliances/ranges/electric/bespoke-6-3-cu-ft-smart-slide-in-electric-range-with-air-sous-vide-air-fry-in-matte-black-steel-nse6dg8500mtaa",
      desciption: " Bespoke 6 cu.ft.Smart-In Gas Range width Smart Oven Camera",
      price1: 1200,
      price2: 3899,
      btn: "Buy now",
    },

    {
      image:
        "https://www.samsung.com/us/home-appliances/ranges/electric/bespoke-6-3-cu-ft-smart-slide-in-electric-range-with-air-sous-vide-air-fry-in-matte-black-steel-nse6dg8500mtaa",
      desciption: " Bespoke 6 cu.ft.Smart-In Gas Range width Smart Oven Camera",
      price1: 600,
      price2: 1599,
      btn: "Buy now",
    },

    {
      image:
        "https://www.samsung.com/us/home-appliances/ranges/electric/bespoke-6-3-cu-ft-smart-slide-in-electric-range-with-air-sous-vide-air-fry-in-matte-black-steel-nse6dg8500mtaa",
      desciption: " Bespoke 6 cu.ft.Smart-In Gas Range width Smart Oven Camera",
      price1: 1200,
      price2: 2199,
      btn: "Buy now",
    },

    {
      image:
        "https://www.samsung.com/us/home-appliances/ranges/electric/bespoke-6-3-cu-ft-smart-slide-in-electric-range-with-air-sous-vide-air-fry-in-matte-black-steel-nse6dg8500mtaa",
      desciption: " Bespoke 6 cu.ft.Smart-In Gas Range width Smart Oven Camera",
      price1: 600,
      price2: 1499,
      btn: "Buy now",
    },
  ];

  const CardInfo = data?.map((value, inx) => (
    <div className="product__card" key={inx}>
      <div>
        <img src={gaz_plita} alt="gazplita" className="gaz_plita" />
      </div>
      <p className="product__card__desc">{value.desciption}</p>
      <div className="card-display">
        <div className="product__price"> save ${value.price1} </div>
        <div className="card-price"> From ${value.price2}</div>
      </div>
      <button className="card-btn">{value.btn}</button>
    </div>
  ));

  return (
    <div className="products__cards">
      <div className="container">
        <h1>Shop all latest offers and innovations</h1>
        <div className="product__cards">{CardInfo}</div>
      </div>
    </div>
  );
}

export default Card;
