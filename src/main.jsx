import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Redux/store";
import { createRoot } from "react-dom/client";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </StrictMode>,
)
