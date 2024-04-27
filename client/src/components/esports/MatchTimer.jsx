import { useState, useEffect } from 'react';
import { convertTimeFormat } from '../../../../server/utils/timeConverter';
import { adjustToPacific } from '../../../../server/utils/timezoneAdjust';

export const MatchTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const formattedDate = convertTimeFormat(targetDate);
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
    <div>
      {timeLeft.days}:
      {('0' + timeLeft.hours).slice(-2)}:
      {('0' + timeLeft.minutes).slice(-2)}:
      {('0' + timeLeft.seconds).slice(-2)}
    </div>
  );
}

