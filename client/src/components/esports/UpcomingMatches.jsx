import { Subheader } from "../Subheader"
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

  return (
    <>
      <Subheader
          content="Upcoming Matches"
      />
      <div className="team-list flex flex-col">
        {
          upcoming.map((team, index) => (
            <div className="team flex flex-col" key={index}>
              <span>{team.matchData.name}</span>
              <span>{team.matchData.date}</span>
              <span>{team.matchData.event}</span>
            </div>
          ))
        }
      </div>
    </>
  )
}