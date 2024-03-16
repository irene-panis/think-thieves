import { TeamButton } from "./TeamButton";

export const SelectTeam = ( props ) => {
  
  return (
    <div className='select-team flex flex-col flex-grow w-full overflow-hidden text-white relative'>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <TeamButton onTeamChange={props.onTeamChange}>VAL</TeamButton>
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center">
       <TeamButton onTeamChange={props.onTeamChange}>LOL</TeamButton>
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <TeamButton onTeamChange={props.onTeamChange}>CDL</TeamButton>
      </div>
  </div>
  )
}