export const getStreams = async ( token, roster ) => {
  let params;
  switch (roster) {
    case 'VALORANT':
      params = "?user_login=asunaweeb&user_login=bangzerra&user_login=boostio&user_login=cryocells&user_login=777eeiu";
      break;
    case 'LEAGUE OF LEGENDS':
      params = "?user_login=eylaa&user_login=meech_lol&user_login=quidlolkr&user_login=city072331&user_login=generalsniper";
      break;
    case 'CALL OF DUTY':
      params = "?user_login=odanghosty&user_login=joedeceivess&user_login=krempw&user_login=nastie_";
      break;
  }
  const url = `https://api.twitch.tv/helix/streams` + params; // add streamers
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