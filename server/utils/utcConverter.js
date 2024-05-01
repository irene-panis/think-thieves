const convertToUtc = (input, tz) => {
  // assuming incoming date is from +2 timezone
  return new Date(input + " " + tz);
}

export default convertToUtc;