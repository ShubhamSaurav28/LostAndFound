import React from 'react'
import StickyNavbar from '../components/layouts/StickyNavbar'
import FooterBar from '../components/layouts/FooterBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <StickyNavbar/>
        <Outlet/>
    </div>
  )
}
