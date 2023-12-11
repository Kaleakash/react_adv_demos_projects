import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";


function LoginPage() {
  const navigate = useNavigate();
  
  const handleSubmit = (username, password) => {
    //console.log(username, password);
    if(username=="admin@gmail.com" && password=="admin@123"){
        navigate("home");
    }else {
      alert("failure try once again")
    }
  };
  return (
    <div className="App">
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
}



export default LoginPage;