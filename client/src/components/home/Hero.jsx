import { Marquee } from "./Marquee"

export const Hero = () => {
  const containerHeight = `calc(100vh - 4rem)`;

  return (
    <div className='hero-wrapper bg-hero bg-cover bg-center flex flex-grow w-full gap-2 overflow-hidden text-white saturate-[1.25] relative' style={{ height: containerHeight }}>
      <Marquee/>
      <div className="content h-full w-full flex flex-col justify-center items-center mx-10">
        <h2 className="uppercase font-bold text-8xl drop-shadow-lg tracking-wider">Think</h2>
        <h2 className="uppercase font-bold text-8xl drop-shadow-lg tracking-wider">Thieves</h2>
      </div>
    </div>
  )
}