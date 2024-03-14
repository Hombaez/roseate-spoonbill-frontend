import React from "react";

import "./SecondaryButton.css";

function SecondaryButton(props) {
  return (
    <>
      <button class="secondary_button">{props.children}</button>
    </>
  );
}

export default SecondaryButton;
