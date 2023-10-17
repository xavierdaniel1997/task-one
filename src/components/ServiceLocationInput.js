import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const ServiceLocationInput = ({formik}) => {
  return (
    <div>
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
    </div>
  )
}

export default ServiceLocationInput