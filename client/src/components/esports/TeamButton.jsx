export const TeamButton = ( {onTeamChange, children} ) => {
  return (
    <>
      <button type="button" className="border border-black bg-white text-black py-1 px-4 active:scale-90 hover:text-white hover:bg-black hover:border-white duration-100 ease-in-out" onClick={() => onTeamChange(`${children}`)}>{children}</button>
    </>
  )
}