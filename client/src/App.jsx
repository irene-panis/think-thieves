import './App.css'
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="wrapper bg-gray-400 flex flex-col w-full">
      <Navbar/>
      <div className="w-full font-dmmono bg-[#F4F3F2]">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
