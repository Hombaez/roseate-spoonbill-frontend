import React from "react";

import "./GreyButton.css";

function GreyButton(props) {
  return (
    <>
      <button class="grey_button">{props.children}</button>
    </>
  );
}

export default GreyButton;
