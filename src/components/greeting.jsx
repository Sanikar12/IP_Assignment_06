import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router";

const Greeting = () => {
  const location = useLocation();

  const greetingStyle = {
    marginTop: "200px",
    marginLeft: "40px"
  };

  return (
    <div>
      <Navbar />
      <h1 style={greetingStyle}>
        Hello {location.state.fname} {location.state.lname},Thank you for Contacting Me!
      </h1>
    </div>
  );
};

export default Greeting;
