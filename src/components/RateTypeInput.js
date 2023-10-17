import { TextField } from '@mui/material'
import React from 'react'

const RateTypeInput = ({formik}) => {
  return (
    <div>
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
    </div>
  )
}

export default RateTypeInput