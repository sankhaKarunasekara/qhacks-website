import React from "react";
import circuits from "../assets/img/circuitsRed.png";
import SignUpForm from "./SignUpForm";

const MailingListSignup = (props) => (
  <div
    css={{
      width: "100%",
      color: "white",
      minHeight: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `#C12232 url(${circuits}) no-repeat center center`,
      backgroundSize: "cover",
      padding: "5%"
    }}
  >
    <div>
      <p
        data-cy="mailing-list-cta"
        css={{
          fontWeight: "bold",
          marginBottom: "28px",
          fontSize: "22px",
          lineHeight: "28px",
          textAlign: "center"
        }}
      >
        Sign up for our mailing list to receive important QHacks announcements!
      </p>
      <SignUpForm dataCyInput="mailing-list-input" dataCyButton="mailing-list-signup-button" />
    </div>
  </div>
);

export default MailingListSignup;
