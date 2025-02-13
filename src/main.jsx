import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LinkShortener from './Linkshortener.jsx'
import "@radix-ui/themes/styles.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LinkShortener></LinkShortener>
  </StrictMode>,
)
