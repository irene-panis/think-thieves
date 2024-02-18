export const Navbar = () => {
  return (
    <nav className="nav-wrapper bg-white flex w-full h-16 justify-center items-center relative z-10 shadow-md">
      <img src='/TT_logo.png' height="50" width="50" className="absolute left-10"></img>
      <ul className="nav-items text-black uppercase flex gap-10">
        <li>Home</li>
        <li>Esports</li>
        <li>Content</li>
        <li>Merch</li>
      </ul>
    </nav>
  )
}