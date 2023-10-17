import { TextField } from '@mui/material'
import React from 'react'

const DescriptionInput = ({formik}) => {
  return (
    <div>
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
    </div>
  )
}

export default DescriptionInput