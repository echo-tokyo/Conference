import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import './assets/reset.css'
import Router from './Router'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)