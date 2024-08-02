import React from 'react'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'

export default function MainLayout() {
  return (
    <div>
      <Header/>
      <div className='my-[2rem] text-center h-[5rem]'>
        <h1>Content goes here .....</h1>
      </div>
      <Footer/>
    </div>
  )
}
