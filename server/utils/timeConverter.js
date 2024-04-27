export const convertTimeFormat = (timeString) => {
  return timeString.replace(/(\d{1,2}):(\d{2})(am|pm)/i, (match, hour, minute, period) => {
    let hh = parseInt(hour, 10);
    if (period.toLowerCase() === 'pm' && hh !== 12) {
      hh += 12;
    } else if (period.toLowerCase() === 'am' && hh === 12) {
      hh = 0;
    }
    return `${hh}:${minute}:00`;
  });
};