import React from "react";
import AddRateTypeForm from "../components/AddRateTypeForm";
import "./Home.css";

import {Button} from "@mui/material";
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
        <AddRateTypeForm/>
        <AvaliableRateType/>
        </div> 
      </div>
      <div className="button-containers">
      <Button variant="contained">Next</Button>
      <Button variant="outlined">Exit</Button>
      </div>
    </div>
  );
};

export default Home;
