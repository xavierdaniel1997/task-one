import React, {useState} from "react";

import "./AddRateTypeForm.css";
import {insertInputs} from "../redux/tableDataSlice"

import AddCardIcon from "@mui/icons-material/AddCard";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";

const AddRateTypeForm = () => {

  const dispatch = useDispatch();

  const [newRateType, setNewRateType] = useState(" ");
  const [discription, setDiscription] = useState(" ");

  const handleSaveData = () => {
    const saveInputs={
      newRateType,
      discription,
    };
    dispatch(insertInputs(saveInputs));

    setNewRateType("");
    setDiscription("");
  }

  return (
    <div className="main-form-container">
      <div className="form-container">
        <div className="icon-heading">
          <AddCardIcon className="icon" />
          <h1 className="form-heading">Add Rate Type</h1>
        </div>
        <div className="input-container">
          <TextField
            id="outlined-basic"
            label="New Rate Type"
            variant="outlined"
            className="input-box"
            value={newRateType}
            onChange={(e)=> setNewRateType(e.target.value)}

          />
          <FormControl fullWidth className="input-box">
            <InputLabel id="demo-simple-select-label">
              Service Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Service Location"
            >
              <MenuItem value={"Delhi"}>Delhi</MenuItem>
              <MenuItem value={"Punjab"}>Punjab</MenuItem>
              <MenuItem value={"Puna"}>Puna</MenuItem>
            </Select>
          </FormControl>

          <TextField
            className="description-box"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          />

          <div>
          <Button variant="outlined" onClick={handleSaveData}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRateTypeForm;
