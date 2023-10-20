import React, { useState } from "react";
// import Navbar from "../components/Navbar/Navbar.jsx";
import { useNavigate } from "react-router";
import "../components/styles/contact.css"
const Contact = () => {
  const navigate = useNavigate();
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
 
  return (
    <form action="" method="post">
      <input
        type="text"name="FirstName" placeholder="First Name" onChange={(event) => {setFName(event.target.value);
        }}
      /><br></br><br></br>
      <input
        type="text" name="LastName"  placeholder="Last Name"  onChange={(event) => {console.log(event);setLName(event.target.value);
        }}
      /><br></br><br></br>
      
      <button
        onClick={() => {
          navigate("/greet", { state: { fname, lname } });
        }}
      >
        Submit
      </button>
    </form>
  );
};
export default Contact;
