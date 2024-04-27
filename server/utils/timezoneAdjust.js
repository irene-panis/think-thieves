export const adjustToPacific = (time) => {
  const date = new Date(time).toISOString();
  const pacificOffset = -7;
  const pacificTime = new Date(date.getTime() + pacificOffset * 60 * 60 * 1000);
  return pacificTime.toISOString();
}
