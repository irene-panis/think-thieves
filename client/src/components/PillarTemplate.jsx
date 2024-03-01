import { Image } from "./Image"
import { Link } from "react-router-dom"

export const PillarTemplate = ( props ) => {
  return (
    <div className="pill-temp-wrapper flex flex-col justify-around h-full">
      <div className="pill-content flex gap-20">
        <Image
          src={props.src}
          styles="w-[400px] h-[500px] rounded-tl-[50px] rounded-br-[50px]"
        />
        <div className="text-container w-1/2 flex flex-col justify-center gap-5">
          <h2 className="font-dmmono uppercase leading-none">{props.header}</h2>
          <p className="pillar-text">{props.p1}</p>
          <p className="pillar-text">{props.p2}</p>
          <button className="uppercase border border-black self-start py-2 px-2 hover:text-white hover:bg-black duration-300 ease-in-out">
            <Link to={props.linkTo}>Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}