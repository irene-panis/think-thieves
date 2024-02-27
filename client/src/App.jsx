import './App.css'
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <div className="wrapper bg-gray-400 flex flex-col w-full">
      <div className="w-full relative">
        <Navbar/>
      </div>
      <div className="w-full font-dmmono bg-[#F4F3F2]">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
