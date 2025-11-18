export type TimePassed = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getTimePassed(from: Date, to: Date = new Date()): TimePassed {
  let delta = Math.floor((to.getTime() - from.getTime()) / 1000);

  const years = Math.floor(delta / (3600 * 24 * 365));
  delta -= years * 3600 * 24 * 365;
  const months = Math.floor(delta / (3600 * 24 * 30));
  delta -= months * 3600 * 24 * 30;
  const days = Math.floor(delta / (3600 * 24));
  delta -= days * 3600 * 24;
  const hours = Math.floor(delta / 3600);
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60);
  delta -= minutes * 60;
  const seconds = delta;

  return { years, months, days, hours, minutes, seconds };
}
