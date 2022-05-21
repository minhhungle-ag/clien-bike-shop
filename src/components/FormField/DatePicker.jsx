import { TextField } from '@mui/material'
import React from 'react'

export function DatePicker({ defaultValue, label, onChange }) {
  function handleChange(e) {
    onChange?.(e.target.value)
  }

  return (
    <TextField
      fullWidth
      defaultValue={defaultValue || ''}
      size="small"
      type="date"
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={handleChange}
    />
  )
}
