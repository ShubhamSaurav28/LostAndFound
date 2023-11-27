import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StickyNavbar from './components/layouts/StickyNavbar'
import FooterBar from './components/layouts/FooterBar'
import Layout from './pages/Layout'
import IndexPage from './pages/IndexPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import LostPage from './pages/LostPage'
import FoundPage from './pages/FoundPage'
import ItemsPage from './pages/ItemsPage'
import IteminfoPage from './pages/IteminfoPage'
import { UserContextProvider } from '../UserContext'
import EditPage from './pages/EditPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <UserContextProvider>
          <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/' element={<IndexPage/>} />
            <Route path='/aboutus' element={<AboutPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/lost' element={<LostPage/>}/>
            <Route path='/found' element={<FoundPage/>}/>
            <Route path='/items' element={<ItemsPage/>}/>
            <Route path="/client/post/:id" element={<IteminfoPage/>}/>
            <Route path="/edit/:id" element={<EditPage/>}/>
            <Route path="/profile/:id" element={<ProfilePage/>}/>
            
        </Route>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </UserContextProvider>
    </>
  )
}

export default App
