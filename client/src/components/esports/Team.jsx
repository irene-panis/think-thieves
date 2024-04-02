/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../Header"
import { Subheader } from "../Subheader"
import { useState, useEffect } from "react"
import { PlayerProfile } from "./PlayerProfile"

export const Team = ( props ) => {

  const valRoster = [
    {
      ign: 'Asuna',
      img: '/esports/asuna.jpeg'
    },
    {
      ign: 'bang',
      img: '/esports/bang.jpeg'
    },
    {
      ign: 'Boostio',
      img: '/esports/boostio.jpeg'
    },
    {
      ign: 'Cryo',
      img: '/esports/cryo.jpeg'
    },
    {
      ign: 'eeiu',
      img: '/esports/eeiu.jpeg'
    }
  ];
  const leagueRoster = [
    {
      ign: 'Eyla',
      img: '/esports/eyla.jpeg'
    },
    {
      ign: 'Meech',
      img: '/esports/meech.jpeg'
    },
    {
      ign: 'Quid',
      img: '/esports/quid.jpeg'
    },
    {
      ign: 'River',
      img: '/esports/river.jpeg'
    },
    {
      ign: 'Sniper',
      img: '/esports/sniper.jpeg'
    }
  ];
  const cdlRoster = [
    {
      ign: 'Ghosty',
      img: '/esports/ghosty.jpeg'
    },
    {
      ign: 'JoeDeceives',
      img: '/esports/joedeceives.jpeg'
    },
    {
      ign: 'Kremp',
      img: '/esports/kremp.png'
    },
    {
      ign: 'Nastie',
      img: '/esports/nastie.png'
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