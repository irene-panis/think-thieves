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
        { platform: 'stream', link: 'https://twitch.tv/AsunaWEEB' }
      ]
    },
    {
      ign: 'bang',
      img: '/esports/bang.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/bangzerra' },
        { platform: 'stream', link: 'https://twitch.tv/bangzerra' }
      ]
    },
    {
      ign: 'Boostio',
      img: '/esports/boostio.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/Boostio' },
        { platform: 'stream', link: 'https://twitch.tv/boostio' }
      ]
    },
    {
      ign: 'Cryo',
      img: '/esports/cryo.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/Cryocells_' },
        { platform: 'stream', link: 'https://twitch.tv/Cryocells' }
      ]
    },
    {
      ign: 'eeiu',
      img: '/esports/eeiu.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/777eeiu' },
        { platform: 'stream', link: 'https://twitch.tv/777eeiu' }
      ]
    }
  ];
  const leagueRoster = [
    {
      ign: 'Eyla',
      img: '/esports/eyla.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/SupportEyla' },
        { platform: 'stream', link: 'https://twitch.tv/eylaa' }
      ]
    },
    {
      ign: 'Meech',
      img: '/esports/meech.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/Meechlol1' },
        { platform: 'stream', link: 'https://twitch.tv/meech_lol' }
      ]
    },
    {
      ign: 'Quid',
      img: '/esports/quid.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/quidlolkr' },
        { platform: 'stream', link: 'https://twitch.tv/quidlolkr' }
      ]
    },
    {
      ign: 'River',
      img: '/esports/river.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/lolRiver' },
        { platform: 'stream', link: 'https://twitch.tv/city072331' }
      ]
    },
    {
      ign: 'Sniper',
      img: '/esports/sniper.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/GeneralSniper' },
        { platform: 'stream', link: 'https://twitch.tv/generalsniper' }
      ]
    }
  ];
  const cdlRoster = [
    {
      ign: 'Ghosty',
      img: '/esports/ghosty.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/oDanGhosty' },
        { platform: 'stream', link: 'https://twitch.tv/odanghosty' }
      ]
    },
    {
      ign: 'JoeDeceives',
      img: '/esports/joedeceives.jpeg',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/JoeDeceives' },
        { platform: 'stream', link: 'https://twitch.tv/joedeceivess' }
      ]
    },
    {
      ign: 'Kremp',
      img: '/esports/kremp.png',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/KrempV' },
        { platform: 'stream', link: 'https://twitch.tv/krempw' }
      ]
    },
    {
      ign: 'Nastie',
      img: '/esports/nastie.png',
      socials: [
        { platform: 'twitter', link: 'https://twitter.com/Nastiee_' },
        { platform: 'stream', link: 'https://twitch.tv/nastie_' }
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
    <>
      <Header
        header={props.name}
      />
      <div className="social-info flex justify-evenly">
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
    </>
  )
}