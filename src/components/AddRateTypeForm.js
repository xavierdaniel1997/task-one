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
          <TextField
            id="rateType"
            name="rateType"
            label="Rate Type"
            variant="outlined"
            fullWidth
            value={formik.values.rateType}
            onChange={formik.handleChange}
            error={formik.touched.rateType && Boolean(formik.errors.rateType)}
            helperText={formik.touched.rateType && formik.errors.rateType}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {formik.touched.serviceLocation &&
              formik.errors.serviceLocation ? (
                <span style={{color: "red"}}>
                  {formik.errors.serviceLocation}
                </span>
              ) : (
                "Service Location"
              )}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="serviceLocation"
              label={
                formik.touched.serviceLocation &&
                formik.errors.serviceLocation ? (
                  <span style={{color: "red"}}>
                    {formik.errors.serviceLocation}
                  </span>
                ) : (
                  "Service Location"
                )
              }
              name="serviceLocation"
              value={formik.values.serviceLocation}
              onChange={formik.handleChange}
              error={
                formik.touched.serviceLocation &&
                Boolean(formik.errors.serviceLocation)
              }
            >
              <MenuItem value={"Delhi"}>Delhi</MenuItem>
              <MenuItem value={"Punjab"}>Punjab</MenuItem>
              <MenuItem value={"Puna"}>Puna</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />

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


