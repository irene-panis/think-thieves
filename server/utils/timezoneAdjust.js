export const adjustToPacific = (time) => {
  const date = new Date(time);
  const utcTime = date.toUTCString();
  const pacificTime = new Date(utcTime + " UTC").toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  return pacificTime;
}
