import { Subheader } from "../Subheader"
import { MatchTimer } from "./MatchTimer";
import { useState, useEffect } from "react";

export const UpcomingMatches = ( props ) => {

  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      // change this url based on team prop
      const getURL = "http://localhost:3001/api/get-val";
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

  const testDate = "2024/05/03 2:00pm";

  return (
    <>
      <Subheader
          content="Upcoming Matches"
      />
      <MatchTimer targetDate={testDate}/>
      <div className="team-list flex flex-col gap-2">
        {upcoming.length === 0 ? (
          <div>No upcoming matches</div>
        ) : (
          upcoming.map((team, index) => (
            <div className="team flex flex-col border border-black shadow-md" key={index}>
              <span className="font-bold uppercase">{team.name}</span>
              <span>{team.date}</span>
              <span>{team.event}</span>
            </div>
          ))
        )}
      </div>
    </>
  )
}