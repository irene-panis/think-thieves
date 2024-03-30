/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../Header"
import { Subheader } from "../Subheader"
import { useState, useEffect } from "react"

export const Team = ( props ) => {

  const valRoster = ['Asuna', 'bang', 'Boostio', 'Cryo', 'eeiu'];
  const leagueRoster = ['Eyla', 'Meech', 'Quid', 'River', 'Sniper'];
  const cdlRoster = ['Ghosty', 'JoeDeceives', 'Kremp', 'Nastie'];

  const [roster, setRoster] = useState(valRoster);

  useEffect(() => {
    switch (props.name) {
      case 'VALORANT':
        setRoster(valRoster);
        break;
      case 'LEAGUE OF LEGENDS':
        setRoster(leagueRoster);
        break;
      case 'CALL OF DUTY':
        setRoster(cdlRoster);
        break;
    }
  }, [props.name]);

  return (
    <>
      <Header
        header={props.name}
      />
      <Subheader
        content="Upcoming Matches"
      />
      <div className="players flex gap-2">
        {
          roster.map((player, index) => (
            <button 
              type="button" 
              key={index}
              className="bg-white py-1 px-2 rounded-md border border-black"
              >{player}</button>
          ))
        }
      </div>
    </>
  )
}