import { Subheader } from "../Subheader"
import { useState, useEffect } from "react"
import { Image } from "../Image";

export const PlayerProfile = ( props ) => {

  const [player, setPlayer] = useState(props.roster[0]);

  const handlePlayerChange = (newPlayer) => {
    setPlayer(newPlayer);
  }

  useEffect(() => {
    setPlayer(props.roster[0]);
  }, [props.roster]);

  const playerSocials = player.socials;

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
              {player.ign}
            </button>
          ))
        }
      </div>
      <div className="player-profile flex flex-col">
        <span>Current player: {player.ign}</span>
        {
          playerSocials.map((social, index) => (
            <span key={index}>
              {social.platform}: {social.link}
            </span>
          ))
          }
        <Image
          src={player.img}
        />
      </div>
    </>
  )
}