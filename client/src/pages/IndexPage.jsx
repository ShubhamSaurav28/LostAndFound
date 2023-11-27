import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StartImg from '../components/StartImg'
import AboutUs from '../components/AboutUs'
import HowtoUse from '../components/HowtoUse'
import HeroCards from '../components/HeroCards'
import FooterBar from '../components/layouts/FooterBar'

export default function IndexPage() {
  return (
    <>
        <StartImg/>
        <div className='container mx-auto'>
        <AboutUs/>
        <HowtoUse/>
        <HeroCards/>
        </div>
        <FooterBar/>
    </>
  )
}
