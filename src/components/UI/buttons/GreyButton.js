import React from "react";

import "./GreyButton.css";

function GreyButton(props) {
  return (
    <>
      <button className="grey_button">{props.children}</button>
    </>
  );
}

export default GreyButton;
