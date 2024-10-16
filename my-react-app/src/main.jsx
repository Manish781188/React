import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context.jsx'
import { CartProvider } from './PropsDriling/Contex.jsx'

// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Context.Provider value='hellooooooo'>
    <App />
    </Context.Provider> */}
     <BrowserRouter>
     <CartProvider>
     <App/>
    </CartProvider>
     </BrowserRouter>
    
  </StrictMode>
)
