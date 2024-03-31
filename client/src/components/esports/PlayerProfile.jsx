import { Subheader } from "../Subheader"
import { useState, useEffect } from "react"

export const PlayerProfile = ( props ) => {

  const [player, setPlayer] = useState('');

  const handlePlayerChange = (newPlayer) => {
    setPlayer(newPlayer);
  }

  useEffect(() => {
    setPlayer(props.roster[0]);
  }, [props.roster]);

  return (
    <>
      <Subheader
        content="Player Profiles"
      />
      <div className="players flex gap-2">
        {
          props.roster.map((player, index) => (
            <button 
              type="button"
              onClick={() => handlePlayerChange(player)} 
              key={index}
              className="bg-white py-1 px-2 rounded-md border border-black"
            >
              {player}
            </button>
          ))
        }
      </div>
      <span>Current player: {player}</span>
    </>
  )
}