import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import GamesStoreApp from './GamesStoreApp'
import { BrowserRouter } from 'react-router-dom'
import './main.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GamesStoreApp />
    </BrowserRouter>
  </StrictMode>,
)
