import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Pillars } from "../components/Pillars"

export const Home = () => {
  return (
    <div className="home-wrapper w-full h-full">
      <div className="bg-gray-400 flex flex-col w-full h-screen relative">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Pillars/>
    </div>
  )
}