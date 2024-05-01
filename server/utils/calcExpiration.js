import convertToUtc from "./utcConverter.js"

export const calcExpiration = (date, tz) => {
  const utc = convertToUtc(date, tz);
  return (new Date(utc) - new Date()) / 1000; // time until input date in seconds
}