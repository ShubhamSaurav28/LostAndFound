import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import Layout from './pages/Layout.jsx';
import IndexPage from './pages/IndexPage.jsx';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
      <App/>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
