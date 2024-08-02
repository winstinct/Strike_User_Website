import React from 'react'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function MainLayout() {
  const {pathname} = useLocation();
  console.log('Current Location===> ', pathname)
  return (
    <div>
      <Header/>
      <div className='my-[2rem] text-center h-[5rem]'>
        <h1>Content goes here .....</h1>
      </div>
      {pathname === "/login" || pathname === "/signup" ? "" : <Footer/>}
    </div>
  )
}
