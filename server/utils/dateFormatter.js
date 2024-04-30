import { convertTimeFormat } from "./timeConverter";
import { adjustToPacific } from "./timezoneAdjust";

const formatDate = (date) => {
  console.log("testing testing is this formatter working");
  console.log(date);
  let dateInput = date;
  const containsAM = dateInput.toLowerCase().includes('am');
  const containsPM = dateInput.toLowerCase().includes('pm');
  if (containsAM || containsPM) {
    dateInput = convertTimeFormat(date); // convert time to 00:00:00
  }
  console.log(dateInput);
  const pacificDate = adjustToPacific(dateInput);
  console.log(pacificDate);
  const newDate = new Date(pacificDate);
  // Convert to desired format using toLocaleString()
  const formattedDate = newDate.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  });

  return formattedDate;
}

export default formatDate;