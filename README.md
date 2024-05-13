# Think Thieves (100 Thieves Fansite)

Think Thieves is a re-imagining of the 100 Thieves website, designed to place a larger emphasis on the team's esports sector. While the original 100 Thieves website is beautiful as it is, I felt that there was not enough information being showcased regarding the organization's esports teams and content creators. Thus, Think Thieves is meant to exacerbate this by placing esports and content at the forefront of the site's design. 

Web scrapers and APIs are used in tandem to grab the latest data about who's currently live and when 100 Thieves' esports teams are playing next. Match and stream data are cached to prevent overly-repeated API calls and scrapes. Match data is retrieved by web scraping vlr.gg for 100T VAL matches and using the Liquipedia API to parse for 100T LoL's and LA Thieves' matches. Current Twitch streams are retrieved using the Twitch API while current YouTube streams are retrieved by scraping the channels of those that stream on YouTube (which is only a tiny handful).

Think Thieves is being built using React, with Express to assist in running the Puppeteer web scraper. Match and stream data are cached using Redis.

## Preview 
No deployed site yet but here are a few previews of the site on mobile! <br>
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/552c0d48-6682-42a6-b548-96957b1b0035" width="200" height="auto">
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/7170699b-9f7a-45ef-ac83-5f094d6e8bad" width="200" height="auto">
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/431bfa6e-d7d6-4476-8fc5-88e0eaa91be8" width="200" height="auto">
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/29690a3d-589c-4524-817d-7bda7147b6c4" width="200" height="auto">







## Current progress
- Finishing touches on design
- Scaling mobile layout up to web

## Technologies
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![image](https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white)
![image](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)

[source](https://github.com/alexandresanlim/Badges4-README.md-Profile?tab=readme-ov-file#how-to-use)
