import './App.css'
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { useState, useEffect } from 'react';

import { Hero } from './components/Hero';

function App() {

  const [page, setPage] = useState('');
  const current = useLocation().pathname;

  useEffect(() => {
    setPage(current);
  }, [current]);

  return (
    <div className="wrapper bg-gray-400 flex flex-col w-full">
      {
        page === '/' ?
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
