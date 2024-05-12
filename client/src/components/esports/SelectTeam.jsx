import { TeamButton } from "./TeamButton";

export const SelectTeam = ( props ) => {
  const containerHeight = `calc(100vh - 4rem)`;
  
  return (
    <div className='select-team flex flex-col lg:flex-row w-full overflow-hidden text-white relative' style={{ height: containerHeight }}>
      <div className="h-full w-full flex flex-col justify-center items-center bg-val bg-cover bg-center">
        <TeamButton onTeamChange={props.onTeamChange}>VALORANT</TeamButton>
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center bg-lcs bg-cover bg-center">
        <TeamButton onTeamChange={props.onTeamChange}>LEAGUE OF LEGENDS</TeamButton>
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center bg-cdl bg-cover bg-center">
        <TeamButton onTeamChange={props.onTeamChange}>CALL OF DUTY</TeamButton>
      </div>
  </div>
  )
}