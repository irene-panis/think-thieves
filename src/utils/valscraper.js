import puppeteer from "puppeteer";

export const getValMatches = async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  const url = 'https://www.vlr.gg/team/matches/120/100-thieves/?group=upcoming';

  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  const matches = await page.evaluate(() => {
    const match = document.querySelector("a.wf-card");
    const team = match.querySelector("div.m-item-team.mod-right > span.m-item-team-name");
    const teamName = team.innerText;

    return { teamName };
  });

  console.log(matches);

  await browser.close();
};

getValMatches();
