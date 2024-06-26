import { Subheader } from "../Subheader";
import { useState, useEffect } from "react";
import { Image } from "../Image";
import { SocialIcon } from "../SocialIcon";
import { Header } from "../Header";

export const PlayerProfile = (props) => {
  const [player, setPlayer] = useState(props.roster[0]);

  const handlePlayerChange = (newPlayer) => {
    setPlayer(newPlayer);
  };

  useEffect(() => {
    setPlayer(props.roster[0]);
  }, [props.roster]);

  const playerSocials = player.socials;

  return (
    <div className="flex flex-col">
      <Subheader content="PLAYER PROFILES" />
      <div className="profiles-content flex flex-wrap lg:justify-around">
        <div className="players flex flex-wrap lg:flex-col justify-evenly gap-2">
          {props.roster.map((player, index) => (
            <button
              type="button"
              onClick={() => handlePlayerChange(player)}
              key={index}
              className="bg-white py-1 px-2 border border-black uppercase hover:bg-black hover:text-white ease-in-out duration-200"
            >
              {player.ign}
            </button>
          ))}
        </div>
        <div className="player-profile md:flex gap-5 items-end my-4">
          <div className="player-info flex flex-col items-end">
            <Header header={player.ign} />
            <div className="player-socials flex gap-4">
              {playerSocials.map((social, index) => {
                const username = social.link.split("/").pop(); // Get the last part of the URL
                return (
                  <span key={index}>
                    <a href={social.link}>
                      <SocialIcon platform={social.platform} />
                      {username}
                    </a>
                  </span>
                );
              })}
            </div>
          </div>
          <Image src={player.img} />
        </div>
      </div>
    </div>
  );
};
