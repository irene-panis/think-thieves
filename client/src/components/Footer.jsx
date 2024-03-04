import { Subscribe } from "./Subscribe"

export const Footer = () => {
  return (
    <div className="footer-wrapper h-[200px] flex justify-evenly items-center py-5 bg-[#131200] text-white">
      <span>made with 🤍 by <a href="https://github.com/irene-panis/think-thieves" target="_blank">irene panis</a>.</span>
      <div className="vl"></div>
      <Subscribe/>
    </div>
  )
}