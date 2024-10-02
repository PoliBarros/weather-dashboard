import { useMemo } from 'react';

const useUnixTimestamp = (timestamp: number) => {
  return useMemo(() => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

    // Get the day of the week
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });

    // Get the date in the format: Month Day
    const formattedDate = date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    // Get the time in 24-hour format
    const time = date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    return {
      dayOfWeek,
      formattedDate,
      time,
    };
  }, [timestamp]);
};

export default useUnixTimestamp;
