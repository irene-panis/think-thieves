import { About } from "../components/home/About"
import { Pillars } from "../components/home/Pillars"
import { Culture } from "../components/home/Culture"
import { Partners } from "../components/home/Partners"

export const Home = () => {
  return (
    <div className="home-wrapper w-full h-full flex flex-col gap-20 py-20 px-5">
      <About/>
      <Pillars/>
      <Culture/>
      <Partners/>
    </div>
  )
}