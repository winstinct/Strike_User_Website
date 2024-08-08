import React from 'react'
import Header from '../shared/Header/Header'
import { Outlet } from 'react-router-dom'

export default function LoginSignupLayout() {
  return (
    <div>
      <Header/>
      <div className='mt-[5rem]'>
        <Outlet/>
      </div>
    </div>
  )
}
