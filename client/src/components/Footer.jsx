import { Subscribe } from "./Subscribe"

export const Footer = () => {
  return (
    <div className="footer-wrapper h-[200px] flex justify-evenly items-center py-5 bg-[#131200] text-white">
      <span className="w-[40%] text-center">made with 🤍 by <a href="https://github.com/irene-panis/think-thieves" target="_blank" className="underline hover:bg-white hover:text-black duration-200 ease-in-out">irene panis</a>.</span>
      <div className="vl"></div>
      <Subscribe/>
    </div>
  )
}