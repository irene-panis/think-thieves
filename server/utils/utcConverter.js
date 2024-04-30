const convertToUtc = (input) => {
  // assuming incoming date is from +2 timezone
  const date = new Date(input);
  const timezoneOffset = 2;
  const utcTime = new Date(date.getTime() - timezoneOffset * 60 * 60 * 1000);
  return utcTime;
}

export default convertToUtc;