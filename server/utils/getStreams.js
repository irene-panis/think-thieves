import dotenv from "dotenv";
dotenv.config();

export const getStreams = async ( token ) => {
  const url = "https://api.twitch.tv/helix/streams"; // add streamers
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Client-Id': `${process.env.TWITCH_CLIENT_ID}`
    }
  });
  const data = await response.json();
  return data;
}