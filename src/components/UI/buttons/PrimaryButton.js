import React from "react";

import "./PrimaryButton.css";

function PrimaryButton(props) {
  return (
    <>
      <button className="primary_button">{props.children}</button>
    </>
  );
}

export default PrimaryButton;
