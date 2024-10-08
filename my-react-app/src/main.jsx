import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Context from './Context.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Context.Provider value='hellooooooo'>
    <App />
    </Context.Provider> */}
     <App />
  </StrictMode>
)
