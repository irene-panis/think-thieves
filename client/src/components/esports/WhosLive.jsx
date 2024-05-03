// use twitch api to check whos live
import { useState, useEffect } from "react";
import { Subheader } from "../Subheader";

export const WhosLive = ( props ) => {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    const grabData = async () => {
      const getURL = `http://localhost:3001/api/get-streams/${props.name}`;
      const response = await fetch(getURL, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      const streamArray = await response.json();
      setStreamers(streamArray.data);
    };
    grabData();
  }, [props.name]);

  return (
    <div className="flex flex-col">
      <Subheader content="Who's Live" />
      <div className="flex flex-col gap-2">
        {streamers.map((stream, index) => (
          <div
            key={index}
            className="border border-black py-1 px-2 flex flex-col"
          >
            <span>{stream.user_name}</span>
            <span>{stream.game_name}</span>
            <span>{stream.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}