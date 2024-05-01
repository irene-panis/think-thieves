const convertToUtc = (input) => {
  // assuming incoming date is from +2 timezone
  return new Date(input + " GMT+0200");
}

export default convertToUtc;