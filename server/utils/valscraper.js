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

    if (matchList.length === 0) { return []; }

    const matchData = [];

    matchList.forEach((match) => {
      const teamName = match.querySelector("div.m-item-team.mod-right > span").innerText;
      const matchDate = match.querySelector("div.m-item-date").innerText;
      const eventTitle = match.querySelector("div.m-item-event").innerText;
      matchData.push(
        {
          name: teamName,
          date: matchDate,
          event: eventTitle
        }
      );
    });
  
    return matchData;
  });

  await browser.close();

  return matches;
};

export default getValMatches;