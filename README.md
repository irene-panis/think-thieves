# Think Thieves (100 Thieves Fansite)

Think Thieves is a re-imagining of the 100 Thieves website, designed to place a larger emphasis on the team's esports sector. While the original 100 Thieves website is beautiful as it is, I felt that there was not enough information being showcased regarding the organization's esports teams and content creators. Thus, Think Thieves is meant to exacerbate this by placing esports and content at the forefront of the site's design. 

Web scrapers and APIs are used in tandem to grab the latest data about who's currently live and when 100 Thieves' esports teams are playing next. Match and stream data are cached to prevent overly-repeated API calls and scrapes. Match data is retrieved by web scraping vlr.gg for 100T VAL matches and using the Liquipedia API to parse for 100T LoL's and LA Thieves' matches. Currently live Twitch streams are retrieved using the Twitch API while currently live YouTube streams are retrieved by scraping the channels of those that stream on YouTube (which is only a tiny handful).

Think Thieves was built using React, with Express to assist in running the Puppeteer web scraper. Match and stream data are cached using Redis.

Most of the images and copywriting were borrowed from the official 100 Thieves website, as this is meant to be a small personal project.

## Deployment 
Deployed site: https://thinkthieves-c78e2959a576.herokuapp.com/ <br/>

## Desktop previews <br/>
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/929e3529-5f48-47a8-87fa-3f58eb863d3e" width="800" height="auto">
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/e5d93406-02e2-43e1-a357-e0e22978cabb" width="800" height="auto">
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/f00e7e41-5191-457e-9d26-636e09b91b00" width="800" height="auto">

## Mobile previews </br>
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/552c0d48-6682-42a6-b548-96957b1b0035" width="175" height="auto">
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/0aeb8461-387f-4a65-bb3c-278a4bae5be1" width="175" height="auto">
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/4c783fd7-fb6c-45d2-ac52-fc2560eb8981" width="175" height="auto">
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/02a8be0e-ce64-4527-8fa4-141d234e29f3" width="175" height="auto">
<img src="https://github.com/irene-panis/think-thieves/assets/65985104/8e9da49f-9774-43d7-9467-588ec1fa573d" width="175" height="auto">

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

## About Me
Hi, I'm Irene :) I graduated from The Coding Boot Camp @ UC San Diego in September 2023, and these days I'm just trying to build cool stuff and hone technologies old and new while I try to land a job in web dev / software engineering!
