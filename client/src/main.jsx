import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux"
import { appStore } from './app/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>

      <App />
    </Provider>

  </StrictMode>,
)
