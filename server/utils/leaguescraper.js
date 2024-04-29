const getLeagueMatches = async () => {
  // grab data
  const endpoint = 'https://liquipedia.net/leagueoflegends/api.php?action=parse&format=json&page=100%20Thieves&prop=text';
  const response = await fetch(endpoint);
  const data = await response.json();

  // table parsing
  const parsedText = data.parse.text['*'];
  var content = document.createElement('div'); // create dummy DOM element
  content.innerHTML = parsedText;
  const upcomingMatches = content.querySelector('.fo-nttax-infobox.panel'); // upcoming matches container
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

  console.log(matches);
  return matches;
};

export default getLeagueMatches;