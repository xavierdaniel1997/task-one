import React, {useState} from "react";

import {useFormik} from "formik";
import * as yup from "yup";

import "./AddRateTypeForm.css";
import {insertInputs} from "../redux/tableDataSlice";

import AddCardIcon from "@mui/icons-material/AddCard";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {useDispatch} from "react-redux";
import RateTypeInput from "./RateTypeInput";
import ServiceLocationInput from "./ServiceLocationInput";
import DescriptionInput from "./DescriptionInput";

const validationSchema = yup.object({
  rateType: yup.string().required("Rate Type is required"),
  description: yup.string().required("Description is required"),
  serviceLocation: yup.string().required("Service Location is required"),
});

const AddRateTypeForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      rateType: "",
      description: "",
      serviceLocation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(insertInputs(values));
      console.log(values);
    },
  });

  return (
    <div className="main-form-container">
      <div className="form-container">
        <div className="icon-heading">
          <AddCardIcon className="icon" />
          <h1 className="form-heading">Add Rate Type</h1>
        </div>
        <form className="input-container" onSubmit={formik.handleSubmit}>
          
          <RateTypeInput formik={formik}/>
          <ServiceLocationInput formik={formik}/>
          <DescriptionInput formik={formik}/>
          
          <div>
            <Button variant="outlined" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRateTypeForm;


