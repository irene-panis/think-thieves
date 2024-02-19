export const Navbar = () => {
  return (
    <nav className="nav-wrapper bg-white flex w-full h-16 justify-center items-center relative z-10 shadow-md">
      <img src='/TT_logo.png' height="50" width="50" className="absolute left-10"></img>
      <ul className="nav-items text-black uppercase flex gap-16">
        <li className="px-1 hover:underline hover:bg-black hover:text-white">Home</li>
        <li className="px-1 hover:underline hover:bg-black hover:text-white">Esports</li>
        <li className="px-1 hover:underline hover:bg-black hover:text-white">Content</li>
        <li className="px-1 hover:underline hover:bg-black hover:text-white">Merch</li>
      </ul>
    </nav>
  )
}