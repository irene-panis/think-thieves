const formatName = (teamName) => {
  if (teamName.includes(' (page does not exist)')) {
    const endIndex = teamName.indexOf(' (page does not exist)');
    return teamName.substring(0, endIndex);
  }
  return teamName;
}

export default formatName;