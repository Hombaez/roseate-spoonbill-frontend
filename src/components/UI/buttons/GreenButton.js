import React from "react";

import "./Button.css";

function GreenButton(props) {
  const buttonStyle = {
    backgroundColor: props.color || "#69FBDF",
    borderColor: props.color || "#69FBDF",
    "--button-hover-color": props.hoverColor || "var(--dark-blue)",
    borderRadius: "52px",
  };

  return (
    <>
      <a href={props.to} target="_blank" rel="noopener noreferrer">
        <button
          className="button"
          onClick={props.onClick}
          type={props.type || "button"}
          style={buttonStyle}
        >
          {props.children}
        </button>
      </a>
    </>
  );
}

export default GreenButton;
