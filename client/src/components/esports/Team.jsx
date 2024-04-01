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
      ign: 'Eyla'
    },
    {
      ign: 'Meech'
    },
    {
      ign: 'Quid'
    },
    {
      ign: 'River'
    },
    {
      ign: 'Sniper'
    }
  ];
  const cdlRoster = [
    {
      ign: 'Ghosty'
    },
    {
      ign: 'JoeDeceives'
    },
    {
      ign: 'Kremp'
    },
    {
      ign: 'Nastie'
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