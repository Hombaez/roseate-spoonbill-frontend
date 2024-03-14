import React from "react";

import "./GreenButton.css";

function GreenButton(props) {
  return (
    <>
      <button className="green_button">{props.children}</button>
    </>
  );
}

export default GreenButton;
