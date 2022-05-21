import { DatePicker, DateTimePicker } from '@mui/lab'
import { TextField } from '@mui/material'
import * as React from 'react'
import { useController } from 'react-hook-form'

export function DateTimePickerField({ name, control, label, withTime = false, onChange }) {
  const {
    field: { value, onChange: controllerOnChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })

  const Component = withTime ? DateTimePicker : DatePicker
  const format = withTime ? 'DD/MM/YYYY HH:mm' : 'DD/MM/YYYY'

  return (
    <Component
      label={label}
      value={value}
      onChange={(date) => {
        onChange?.(date)
        controllerOnChange(date)
      }}
      inputFormat={format}
      renderInput={(params) => (
        <TextField
          {...params}
          margin="normal"
          fullWidth
          size="small"
          onBlur={onBlur}
          error={invalid}
          helperText={error?.message}
        />
      )}
    />
  )
}
