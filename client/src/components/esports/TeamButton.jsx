export const TeamButton = ( {onTeamChange, children} ) => {
  return (
    <>
      <button type="button" className="border border-grey bg-white text-black py-1 px-4 rounded-full shadow-sm active:scale-90 duration-100 ease-in-out" onClick={() => onTeamChange(`${children}`)}>{children}</button>
    </>
  )
}