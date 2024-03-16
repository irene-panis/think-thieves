import { Hero } from "../components/home/Hero"
import { About } from "../components/home/About"
import { Pillars } from "../components/home/Pillars"
import { Culture } from "../components/home/Culture"
import { Partners } from "../components/home/Partners"

export const Home = () => {
  return (
    <div className="home-wrapper w-full h-full flex flex-col pb-20">
      <Hero/>
      <div className="px-5 flex flex-col gap-20">
        <About/>
        <Pillars/>
        <Culture/>
        <Partners/>
      </div>
    </div>
  )
}