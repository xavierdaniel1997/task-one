import React from 'react'

import "./AddRateTypeForm.css";

import AddCardIcon from '@mui/icons-material/AddCard';
import { TextField } from '@mui/material';

const AddRateTypeForm = () => {
  return (
    <div className='main-form-container'>
      <div className="form-container">
        <div className='icon-heading'>
          <AddCardIcon className='icon'/>
          <h1 className='form-heading'>Add Rate Type</h1>
        </div>
        <div className='input-container'>
        <TextField id="outlined-basic" label="New Rate Type" variant="outlined" className='input-box'/>
        <TextField id="outlined-basic" label="Service Location" variant="outlined" className='input-box'/>
        </div>
      </div>
    </div>
  )
}

export default AddRateTypeForm


