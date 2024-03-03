import { About } from "../components/About"
import { Pillars } from "../components/Pillars"
import { Culture } from "../components/Culture"
import { Partners } from "../components/Partners"

export const Home = () => {
  return (
    <div className="home-wrapper w-full h-full">
      <About/>
      <Pillars/>
      <Culture/>
      <Partners/>
    </div>
  )
}