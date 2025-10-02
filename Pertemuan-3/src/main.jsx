import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Home from './Pages/Home' // Import the Home component
import { Login } from './Pages/Login' // Import the Login component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Login />
  </StrictMode>,
)
