import React from "react";
import AddRateTypeForm from "../components/AddRateTypeForm";
import "./Home.css";

import {TextField} from "@mui/material";
import AvaliableRateType from "../components/AvaliableRateType";

const Home = () => {
  return (
    <div className="main">
      <div>
        <h1>RATE TYPE</h1>
        <p>Home / Application Admin / Rate Type</p>
      </div>
      <div className="addrateform-container">
        <div className="form-result">
        <AddRateTypeForm />
        <AvaliableRateType/>
        </div> 
      </div>
    </div>
  );
};

export default Home;
