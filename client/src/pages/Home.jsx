import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Pillars } from "../components/Pillars"
import { Culture } from "../components/Culture"

export const Home = () => {
  return (
    <div className="home-wrapper w-full h-full">
      <div className="bg-gray-400 flex flex-col w-full h-screen relative">
        <Hero/>
      </div>
      <About/>
      <Pillars/>
      <Culture/>
    </div>
  )
}