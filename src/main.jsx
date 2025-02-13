import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LinkShortener from './LinkShortener.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LinkShortener></LinkShortener>
  </StrictMode>,
)
