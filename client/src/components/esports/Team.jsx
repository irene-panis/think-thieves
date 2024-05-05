/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../Header"
import { useState, useEffect } from "react"
import { PlayerProfile } from "./PlayerProfile"
import { UpcomingMatches } from "./UpcomingMatches"
import { WhosLive } from "./WhosLive"

export const Team = ( props ) => {

  const valRoster = [
    {
      ign: 'Asuna',
      img: '/esports/asuna.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/Asunaa' },
        { platform: 'twitch', link: 'https://twitch.tv/AsunaWEEB' }
      ]
    },
    {
      ign: 'bang',
      img: '/esports/bang.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/bangzerra' },
        { platform: 'twitch', link: 'https://twitch.tv/bangzerra' }
      ]
    },
    {
      ign: 'Boostio',
      img: '/esports/boostio.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/Boostio' },
        { platform: 'twitch', link: 'https://twitch.tv/boostio' }
      ]
    },
    {
      ign: 'Cryo',
      img: '/esports/cryo.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/Cryocells_' },
        { platform: 'twitch', link: 'https://twitch.tv/Cryocells' }
      ]
    },
    {
      ign: 'eeiu',
      img: '/esports/eeiu.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/777eeiu' },
        { platform: 'twitch', link: 'https://twitch.tv/777eeiu' }
      ]
    }
  ];
  const leagueRoster = [
    {
      ign: 'Eyla',
      img: '/esports/eyla.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/SupportEyla' },
        { platform: 'twitch', link: 'https://twitch.tv/eylaa' }
      ]
    },
    {
      ign: 'Meech',
      img: '/esports/meech.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/Meechlol1' },
        { platform: 'twitch', link: 'https://twitch.tv/meech_lol' }
      ]
    },
    {
      ign: 'Quid',
      img: '/esports/quid.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/quidlolkr' },
        { platform: 'twitch', link: 'https://twitch.tv/quidlolkr' }
      ]
    },
    {
      ign: 'River',
      img: '/esports/river.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/lolRiver' },
        { platform: 'twitch', link: 'https://twitch.tv/city072331' }
      ]
    },
    {
      ign: 'Sniper',
      img: '/esports/sniper.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/GeneralSniper' },
        { platform: 'twitch', link: 'https://twitch.tv/generalsniper' }
      ]
    }
  ];
  const cdlRoster = [
    {
      ign: 'Ghosty',
      img: '/esports/ghosty.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/oDanGhosty' },
        { platform: 'twitch', link: 'https://twitch.tv/odanghosty' }
      ]
    },
    {
      ign: 'JoeDeceives',
      img: '/esports/joedeceives.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/JoeDeceives' },
        { platform: 'twitch', link: 'https://twitch.tv/joedeceivess' }
      ]
    },
    {
      ign: 'Kremp',
      img: '/esports/kremp.png',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/KrempV' },
        { platform: 'twitch', link: 'https://twitch.tv/krempw' }
      ]
    },
    {
      ign: 'Nastie',
      img: '/esports/nastie.png',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/Nastiee_' },
        { platform: 'twitch', link: 'https://twitch.tv/nastie_' }
      ]
    }
  ];

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
    <div className="m-2 flex flex-col gap-4">
      <Header
        header={props.name}
      />
      <div className="social-info flex flex-wrap justify-evenly gap-4">
        <UpcomingMatches
          team={props.name}
        />
        <WhosLive
          team={props.name}
        />
      </div>
      <PlayerProfile
        roster={roster}
      />
    </div>
  )
}