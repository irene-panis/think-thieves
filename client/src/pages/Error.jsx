import '../App.css'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Header } from "../components/Header";

export const Error = () => {
  return (
    <div className="wrapper bg-gray-400 flex flex-col w-full h-screen">
      <Navbar/>
      <div className="w-full flex flex-col gap-4 flex-grow justify-center items-center font-dmmono bg-[#F4F3F2]">
        <Header header="Oops! Something went wrong."/>
        <span>Please navigate back <a href="/" className="underline hover:bg-black hover:text-white duration-200 ease-in-out">Home</a>.</span>
      </div>
      <Footer/>
    </div>
  )
}
