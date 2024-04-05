/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../Header"
import { Subheader } from "../Subheader"
import { useState, useEffect } from "react"
import { PlayerProfile } from "./PlayerProfile"

export const Team = ( props ) => {

  const valRoster = [
    {
      ign: 'Asuna',
      img: '/esports/asuna.jpeg',
      socials: [
        { twitter: 'https://twitter.com/Asunaa' }
      ]
    },
    {
      ign: 'bang',
      img: '/esports/bang.jpeg',
      socials: [
        { twitter: 'https://twitter.com/bangzerra' }
      ]
    },
    {
      ign: 'Boostio',
      img: '/esports/boostio.jpeg',
      socials: [
        { twitter: 'https://twitter.com/Boostio' }
      ]
    },
    {
      ign: 'Cryo',
      img: '/esports/cryo.jpeg',
      socials: [
        { twitter: 'https://twitter.com/Cryocells_' }
      ]
    },
    {
      ign: 'eeiu',
      img: '/esports/eeiu.jpeg',
      socials: [
        { twitter: 'https://twitter.com/777eeiu' }
      ]
    }
  ];
  const leagueRoster = [
    {
      ign: 'Eyla',
      img: '/esports/eyla.jpeg',
      socials: [
        { twitter: 'https://twitter.com/SupportEyla' }
      ]
    },
    {
      ign: 'Meech',
      img: '/esports/meech.jpeg',
      socials: [
        { twitter: 'https://twitter.com/Meechlol1' }
      ]
    },
    {
      ign: 'Quid',
      img: '/esports/quid.jpeg',
      socials: [
        { twitter: 'https://twitter.com/quidlolkr' }
      ]
    },
    {
      ign: 'River',
      img: '/esports/river.jpeg',
      socials: [
        { twitter: 'https://twitter.com/lolRiver' }
      ]
    },
    {
      ign: 'Sniper',
      img: '/esports/sniper.jpeg',
      socials: [
        { twitter: 'https://twitter.com/GeneralSniper' }
      ]
    }
  ];
  const cdlRoster = [
    {
      ign: 'Ghosty',
      img: '/esports/ghosty.jpeg',
      socials: [
        { twitter: 'https://twitter.com/oDanGhosty' }
      ]
    },
    {
      ign: 'JoeDeceives',
      img: '/esports/joedeceives.jpeg',
      socials: [
        { twitter: 'https://twitter.com/JoeDeceives' }
      ]
    },
    {
      ign: 'Kremp',
      img: '/esports/kremp.png',
      socials: [
        { twitter: 'https://twitter.com/KrempV' }
      ]
    },
    {
      ign: 'Nastie',
      img: '/esports/nastie.png',
      socials: [
        { twitter: 'https://twitter.com/Nastiee_' }
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
      <Subheader
        content="Upcoming Matches"
      />
      <PlayerProfile
        roster={roster}
      />
    </>
  )
}