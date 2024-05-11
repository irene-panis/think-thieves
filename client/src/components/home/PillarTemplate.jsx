import { Image } from "../Image"
import { Link } from "react-router-dom"

export const PillarTemplate = ( props ) => {
  return (
    <div className="pill-content flex flex-wrap gap-10 py-10">
      <Image
        src={props.src}
        styles="h-[400px] rounded-tl-[50px] rounded-br-[50px] w-[400px]"
      />
      <div className="text-container flex flex-col justify-center gap-5 max-w-[600px]">
        <h2 className="font-dmmono uppercase leading-none text-2xl">{props.header}</h2>
        <p className="pillar-text">{props.p1}</p>
        <p className="pillar-text">{props.p2}</p>
        <button className="uppercase border border-black self-start py-2 px-2 hover:text-white hover:bg-black duration-300 ease-in-out">
          <Link to={props.linkTo}>Learn More</Link>
        </button>
      </div>
    </div>
  )
}