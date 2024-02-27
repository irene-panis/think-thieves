import './App.css'
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { useState, useEffect } from 'react';

import { Hero } from './components/Hero';

function App() {
  const current = useLocation().pathname;
  const isHomePage = current === '/';

  return (
    <div className="wrapper bg-gray-400 flex flex-col w-full">
      {
        isHomePage ?
        (
          <div className="flex flex-col w-full h-screen relative">
            <Navbar/>
            <Hero/>
          </div>
        ) :
        (
          <Navbar/>
        )
      }
      <div className="w-full font-dmmono bg-[#F4F3F2]">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
