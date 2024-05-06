import { useState, useEffect } from 'react';
import { convertTimeFormat } from '../../../../server/utils/timeConverter';
import { adjustToPacific } from '../../../../server/utils/timezoneAdjust';

export const MatchTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    let formattedDate = targetDate;
    const containsAM = formattedDate.toLowerCase().includes('am');
    const containsPM = formattedDate.toLowerCase().includes('pm');
    if (containsAM || containsPM) {
      formattedDate = convertTimeFormat(targetDate); // convert time to 00:00:00
    }
    const pacificDate = adjustToPacific(formattedDate);
    const difference = new Date(pacificDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {Object.keys(timeLeft).length === 0 ? ( // if timeLeft returns empty object then match is currently live
        <span>Live now!</span>
      ) : (
        <div>
          {timeLeft.days}:{("0" + timeLeft.hours).slice(-2)}:
          {("0" + timeLeft.minutes).slice(-2)}:
          {("0" + timeLeft.seconds).slice(-2)}
        </div>
      )}
    </>
  );
}

