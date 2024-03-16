import './App.css'
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';

import { Hero } from './components/home/Hero';
import { SelectTeam } from './components/esports/SelectTeam';
import { Footer } from './components/Footer';

function App() {
  const current = useLocation().pathname;
  const page = current;
  
  const [team, setTeam] = useState('VAL');

  const handleTeamChange = (newTeam) => {
    setTeam(newTeam);
  }

  return (
    <div className="wrapper bg-gray-400 flex flex-col w-full">
      {
        page === '/' ?
        (
          <div className="flex flex-col w-full h-screen relative">
            <Navbar/>
            <Hero/>
          </div>
        ) : page === '/esports' ?
        (
          <div className="flex flex-col w-full h-screen relative">
            <Navbar/>
            <SelectTeam
              onTeamChange={handleTeamChange}
            />
          </div>
        ) : (
          <Navbar/>
        )
      }
      <div className="w-full font-dmmono bg-[#F4F3F2]">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
