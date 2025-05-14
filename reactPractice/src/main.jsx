import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Nav from './nav'
import Header from './header'
import Middle from './middle'
import Footer from './footer'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)

