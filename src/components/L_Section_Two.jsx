import React from "react";
import "./Landing.css"

const Main = () => {
  return (
    <>
      <div className="container main-container">
        <div className="text-area">
          <h2 className="primay-heading">Some random heading</h2>
          <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="img-section">
          <img src="../assets/images/1.png" alt="" />
          <img src="../assets/images/2.png" alt="" />
          <img src="../assets/images/3.png" alt="" />
          <img src="../assets/images/4.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
