import { Box, createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header'
import { NotFound } from './components/Layout/NotFound'
import { HomeFeature } from './features/HomeFeature'

function App() {
  const [mode, setMode] = useState('dark')

  function handleChangeMode(value) {
    value === true ? setMode('dark') : setMode('light')
  }

  let theme = createTheme({
    palette: {
      mode: mode,
    },
  })

  theme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onChangeMode={handleChangeMode} />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home/*" element={<HomeFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
