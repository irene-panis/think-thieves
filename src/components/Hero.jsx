import { Marquee } from "./Marquee"

export const Hero = () => {
  return (
    <div className='hero-wrapper bg-hero bg-cover flex flex-grow w-full gap-2 overflow-hidden text-white saturate-[1.25] relative'>
      <Marquee/>
      <div className="content h-full w-full flex justify-between items-center mx-10">
        <h2 className="uppercase font-bold text-8xl drop-shadow-lg tracking-wider">Think</h2>
        <h2 className="uppercase font-bold text-8xl drop-shadow-lg tracking-wider">Thieves</h2>
      </div>
    </div>
  )
}