import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loader from "./Components/Loader";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loader/>
    <App />
  </StrictMode>,
)
