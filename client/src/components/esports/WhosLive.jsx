// use twitch api to check whos live
import { useState, useEffect } from "react";
import { Subheader } from "../Subheader";
import { SocialIcon } from "../SocialIcon";

export const WhosLive = ( props ) => {
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    const grabData = async () => {
      const getURL = `http://localhost:3001/api/get-streams/${props.team}`;
      const response = await fetch(getURL, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      const streamArray = await response.json();
      setStreamers(streamArray);
    };
    grabData();
  }, [props.team]);

  return (
    <div className="flex flex-col grow">
      <Subheader content="WHO'S LIVE" />
      <div className="flex flex-col gap-2">
        {streamers.length === 0 ? (
          <div className="italic">No one is currently live</div>
        ): (
        streamers.map((stream, index) => (
          <div
            key={index}
            className="border border-black p-2 flex flex-col min-h-[150px] flex flex-col justify-evenly shadow-md"
          >
            <div className="stream-link flex gap-2 items-center">
              <span>
                <a
                  href={stream.streamData.user_login ? `https://www.twitch.tv/${stream.streamData.user_name}` : `https://www.youtube.com/@${stream.streamData.user_name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:bg-black hover:text-white duration-200 ease-in-out"
                >
                  {stream.streamData.user_name}
                </a>
              </span>
              { 
                stream.streamData.user_login ? (
                  <SocialIcon platform="twitch"/> 
                ) : (
                  <SocialIcon platform="youtube"/>
                )
              }
            </div>
            <span>{stream.streamData.game_name}</span>
            <span className="italic">{stream.streamData.title}</span>
          </div>
        ))
      )}
      </div>
    </div>
  );
}