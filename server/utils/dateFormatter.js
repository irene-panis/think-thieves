import { convertTimeFormat } from "./timeConverter";
import { adjustToPacific } from "./timezoneAdjust";

const formatDate = async (date) => {
  let dateInput = date;
  const containsAM = dateInput.toLowerCase().includes('am');
  const containsPM = dateInput.toLowerCase().includes('pm');
  if (containsAM || containsPM) {
    dateInput = convertTimeFormat(date); // convert time to 00:00:00
  }
  const pacificDate = adjustToPacific(dateInput);
  // Convert to desired format using toLocaleString()
  const formattedDate = pacificDate.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  });

  // Extract and append timezone abbreviation (assuming PST for this example)
  const timezone = 'PT';
  const formattedDateWithTimeZone = formattedDate + ' ' + timezone;
  
  return formattedDateWithTimeZone;
}

export default formatDate;