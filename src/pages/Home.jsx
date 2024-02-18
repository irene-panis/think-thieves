import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"

export const Home = () => {
  return (
    <div className="home-wrapper w-full h-full">
      <div className="bg-gray-400 flex flex-col w-full h-screen relative">
        <Navbar/>
        <Hero/>
      </div>
      <div>this is another div</div>
    </div>
  )
}