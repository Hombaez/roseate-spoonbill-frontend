import React from "react";

import "./SecondaryButton.css";

function SecondaryButton(props) {
  return (
    <>
      <button className="secondary_button">{props.children}</button>
    </>
  );
}

export default SecondaryButton;
