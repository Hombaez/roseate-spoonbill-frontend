import React from "react";

import "./GreenButton.css";

function GreenButton(props) {
  return (
    <>
      <button class="green_button">{props.children}</button>
    </>
  );
}

export default GreenButton;
