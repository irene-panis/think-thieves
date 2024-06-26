import { Subheader } from "../Subheader"
import { MatchTimer } from "./MatchTimer";
import formatDate from "../../../../server/utils/dateFormatter";
import { useState, useEffect } from "react";

export const UpcomingMatches = ( props ) => {

  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      // change this url based on team prop
      let endpoint;
      switch (props.team) {
        case 'VALORANT':
          endpoint = 'get-val';
          break;
        case 'LEAGUE OF LEGENDS':
          endpoint = 'get-lol';
          break;
        case 'CALL OF DUTY':
          endpoint = 'get-cod';
          break;
      }
      const getURL = `https://thinkthieves-c78e2959a576.herokuapp.com/api/${endpoint}`;
      const response = await fetch(getURL, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      const matches = await response.json();
      setUpcoming(matches);
    };
    getMatches();
  }, [props.team]);

  return (
    <div className="flex flex-col grow p-4">
      <Subheader
        content="UPCOMING MATCHES"
      />
      <div className="team-list flex flex-col gap-2">
        {upcoming.length === 0 ? (
          <div className="italic">No upcoming matches</div>
        ) : (
          upcoming.map((team, index) => (
            <div className="team flex flex-col bg-[#131200] text-white shadow-md p-2 min-h-[150px] flex flex-col justify-evenly" key={index}>
              <span className="font-bold uppercase">{team.name}</span>
              <span>{formatDate(team.date)}</span>
              <span>{team.event}</span>
              <MatchTimer targetDate={team.date}/>
            </div>
          ))
        )}
      </div>
    </div>
  )
}