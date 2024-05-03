export const verifyToken = async ( token ) => {
  const url = "https://id.twitch.tv/oauth2/validate";
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `OAuth ${token}`
    }
  });
  const data = await response.json();
  console.log(data);
  return data;
}