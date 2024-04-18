import React, { memo } from "react";
import "./Banner.css";
import samsugS24 from "../images/SamsungS24.avif";
// import { useRef } from "react";

const Banner = (proms) => {
  console.log(proms);
  //   const bannerData = useRef();
  return (
    <div className="banner">
      <div className="container" style={{ background: proms.bg }}>
        <h1>{proms.Title}</h1>
        <img src={samsugS24} alt="" />
        <h2>{proms.card_text}</h2>
        <p>{proms.card_desc}</p>
        <button>{proms.card_btn}</button>
        <p></p>
      </div>
    </div>
  );
};

export default memo(Banner);
