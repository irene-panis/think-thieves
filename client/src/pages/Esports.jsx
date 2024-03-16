import { useState } from "react";
import { SelectTeam } from "../components/esports/SelectTeam"
import { Team } from "../components/esports/Team"

export const Esports = () => {
  const [team, setTeam] = useState('VAL');

  const handleTeamChange = (newTeam) => {
    setTeam(newTeam);
  }

  return (
    <>
      <SelectTeam onTeamChange={handleTeamChange}/>
      <Team name={team}/>
    </>
  )
}