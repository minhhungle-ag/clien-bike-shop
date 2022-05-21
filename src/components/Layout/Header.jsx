import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Container } from '@mui/material'

export default function Header({ onChangeMode }) {
  const [mode, setMode] = React.useState(true)

  function handleChangeMode(e) {
    e.preventDefault()
    setMode(!mode)
    onChangeMode(!mode)
  }

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar style={{ padding: 0 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: 'none' }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Product</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Contact</Button>
          </Box>

          <IconButton size="large" onClick={handleChangeMode} color="inherit">
            {mode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
