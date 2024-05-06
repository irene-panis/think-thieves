import puppeteer from "puppeteer";

const getYoutubeStreams = async () => {

  const browser = await puppeteer.launch();

  const creators = ['Vogue', 'Vogue', 'Vogue', 'Vogue'];

  const streams = [];

  for (const creator of creators) {
    const page = await browser.newPage();
  
    const url = `https://www.youtube.com/@${creator}`;
  
    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });
  
    // Wait for the specific element to appear on the page
    try {
      await page.waitForSelector("div.yt-spec-avatar-shape--live-ring", { timeout: 1000 });
      const stream = await page.evaluate(() => {
        const streamTitle = document.querySelector("#title-wrapper span").innerText;
        return streamTitle;
      });
      const streamObj = {
        name: creator,
        title: stream
      }
      streams.push(streamObj);
    } catch (error) {
      continue;
    }
  }

  await browser.close();
  console.log(streams);
  return streams;
};

export default getYoutubeStreams;