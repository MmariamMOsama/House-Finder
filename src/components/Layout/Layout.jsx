import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbarr/Navbarr'
import footer from '../footer/footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="pt-20">
    <Outlet></Outlet>
    </div>
    <Footer/>
    </>
  )
}
