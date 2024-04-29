import { JSDOM } from 'jsdom';

const getLeagueMatches = async () => {
  // grab data
  // test endpoint for populated upcoming matches container:
  // https://liquipedia.net/leagueoflegends/api.php?action=parse&format=json&page=WAP%20Esports&prop=text
  const endpoint = 'https://liquipedia.net/leagueoflegends/api.php?action=parse&format=json&page=100%20Thieves&prop=text';
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'User-Agent': '100T Fan Site (github.com/irene-panis, irenempanis@gmail.com)',
      'Accept-Encoding': 'gzip'
    }
  });
  const data = await response.json();

  // create a virtual DOM environment
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  const { document } = dom.window;

  // table parsing
  const parsedText = data.parse.text['*'];
  var content = document.createElement('div'); // create dummy DOM element
  content.innerHTML = parsedText;
  const upcomingMatches = content.querySelector('.fo-nttax-infobox.panel'); // upcoming matches container

  if (!upcomingMatches) return []; // if upcoming matches container not found just return empty array

  const matchesArray = upcomingMatches.querySelectorAll('tbody'); // all individual match rows

  const matches = []; // array to push data into

  matchesArray.forEach((match) => {
    // grab team name
    const teamName = match.querySelector('.team-right > span span.team-template-text > a').getAttribute('title');

    // grab match date
    const timerObj = match.querySelector('.timer-object').innerHTML;
    const replaced = timerObj.replace(" -", "");
    const testIndex = replaced.indexOf(" <");
    const matchDate = replaced.substring(0, testIndex) + ":00";

    // grab event name
    const eventName = match.querySelector('.tournament-text > a').innerHTML;

    const matchObj = {
      team: teamName,
      match: matchDate,
      event: eventName
    }

    matches.push(matchObj);
  });

  return matches;
};

export default getLeagueMatches;