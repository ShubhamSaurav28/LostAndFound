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


// const router = createBrowserRouter(
//   createRoutesFromElements(
  // <Route path="/" element={<Layout/>} errorElement={<ErrorPage/>}>
  //   <Route path='/' element={<IndexPage/>} />
  //   <Route path='/aboutus' element={<AboutPage/>}/>
  //   <Route path='/login' element={<LoginPage/>}/>
  //   <Route path='/signup' element={<SignUpPage/>}/>
  //   <Route path='/lost' element={<LostPage/>}/>
  //   <Route path='/found' element={<FoundPage/>}/>
  //   <Route path='/items' element={<ItemsPage/>}/>
  //   <Route path='/items/1' element={<IteminfoPage/>}/>
  // </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
      <App/>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
