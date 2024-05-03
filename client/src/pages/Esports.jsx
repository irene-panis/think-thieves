import { useState } from "react";
import { SelectTeam } from "../components/esports/SelectTeam"
import { Team } from "../components/esports/Team"

export const Esports = () => {

  const [team, setTeam] = useState('VALORANT');

  const handleTeamChange = (newTeam) => {
    setTeam(newTeam);
  }

  return (
    <div className="flex flex-col gap-6">
      <SelectTeam onTeamChange={handleTeamChange}/>
      <Team name={team}/>
    </div>
  )
}