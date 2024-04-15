import puppeteer from "puppeteer";

const getValMatches = async () => {

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  
  // https://www.vlr.gg/team/matches/120/100-thieves/?group=completed
  // https://www.vlr.gg/team/matches/120/100-thieves/?group=upcoming
  const url = 'https://www.vlr.gg/team/matches/120/100-thieves/?group=upcoming';

  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  const matches = await page.evaluate(() => {
    const matchList = Array.from(document.querySelectorAll("a.wf-card.m-item")).slice(0, 10);

    if (matchList.length === 0) { return 'No matches found'; }

    const matchData = [];

    matchList.forEach((match) => {
      const team = match.querySelector("div.m-item-team.mod-right > span.m-item-team-name");
      const teamName = team.innerText;
      matchData.push(teamName);
    });
  
    return matchData;
  });

  await browser.close();

  return matches;
};

export default getValMatches;