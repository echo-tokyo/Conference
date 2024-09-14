import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import './assets/reset.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)