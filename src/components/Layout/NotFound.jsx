import { Button, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export function NotFound(props) {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate('/')
  }

  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Typography variant="h6" component="h6"></Typography>

      <Typography variant="h1" component="h1" fontWeight="bold">
        404
      </Typography>

      <Typography variant="h5" component="h5" marginTop="24px" marginBottom="16px">
        Oops! Page Not Found.
      </Typography>

      <Button onClick={handleGoBack} variant="contained">
        Go to home page
      </Button>
    </Stack>
  )
}
