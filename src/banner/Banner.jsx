import React, { memo } from "react";
import "./Banner.css";
// import { useRef } from "react";

const Banner = (proms) => {
  console.log(proms);
  //   const bannerData = useRef();
  return (
    <div className="banner">
      <div className="container" style={{ background: proms.bg }}>
        <h1>Hello Bannner</h1>
        <p></p>
      </div>
    </div>
  );
};

export default memo(Banner);
