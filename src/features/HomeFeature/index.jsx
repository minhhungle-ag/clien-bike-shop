import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

export function HomeFeature() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
}
