import { Subscribe } from "./Subscribe"

export const Footer = () => {
  return (
    <div className="footer-wrapper h-[200px] flex flex-col justify-evenly items-center p-5 bg-[#131200] text-white gap-5">
      <Subscribe/>
      <div className="vl hidden"></div>
      <span className="text-center">made with 🤍 by <a href="https://github.com/irene-panis/think-thieves" target="_blank" className="underline hover:bg-white hover:text-black duration-200 ease-in-out">irene panis</a>.</span>
    </div>
  )
}