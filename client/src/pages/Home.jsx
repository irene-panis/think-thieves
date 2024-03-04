import { About } from "../components/About"
import { Pillars } from "../components/Pillars"
import { Culture } from "../components/Culture"
import { Partners } from "../components/Partners"

export const Home = () => {
  return (
    <div className="home-wrapper w-full h-full flex flex-col gap-20 py-20">
      <About/>
      <Pillars/>
      <Culture/>
      <Partners/>
    </div>
  )
}