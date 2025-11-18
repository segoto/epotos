import { useEffect, useState } from "react";
import { getTimePassed, type TimePassed } from "./get_time_passed";

export function useGetTimePassed(from: Date): TimePassed {
  const [timePassed, setTimePassed] = useState<TimePassed>(() =>
    getTimePassed(from)
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(getTimePassed(from));
    }, 1000);
    return () => clearInterval(interval);
  }, [from]);
  return timePassed;
}
