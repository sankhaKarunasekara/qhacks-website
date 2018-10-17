import React from "react";
import ActionButton from "./ActionButton";

const SignUpForm = (props) => {
  const commonStyles = {
    fontSize: props.fontSize ? `${props.fontSize}px` : "18px",
    borderRadius: "4px",
    border: "none",
    margin: "8px"
  };

  const buttonStyles = {
    ...commonStyles,
    marginLeft: "4px"
  };

  const fixButtonAlignment = props.fontSize
    ? {
      paddingBottom: "5px"
    }
    : {};

  return (
    <div
      css={{
        textAlign: "center"
      }}
    >
      <input
        placeholder="Enter your email address"
        type="text"
        css={{
          ...commonStyles,
          marginRight: "4px",
          width: "300px",
          minWidth: "50%",
          paddingLeft: "16px",
          paddingRight: "16px",
          height: "48px"
        }}
      />
      <ActionButton
        backgroundColor={props.backgroundColor || "white"}
        foregroundColor={props.foregroundColor || "#00205b"}
        type="rect"
        style={{ buttonStyles, ...fixButtonAlignment }}
      >
        Sign Up
      </ActionButton>
    </div>
  );
};

export default SignUpForm;
