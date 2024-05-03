export const getStreams = async ( token ) => {
  const url = "https://api.twitch.tv/helix/streams"; // add streamers
  const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Client-Id': `${CLIENT_ID}`
    }
  });
  const data = await response.json();
  return data;
}