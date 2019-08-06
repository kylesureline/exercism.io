export const age = (planet, seconds) => {
  const earth_year_in_seconds = 31557600;
  const ORBIT_in_SECONDS = {
    'earth': earth_year_in_seconds,
    'mercury': earth_year_in_seconds * 0.2408467,
    'venus': earth_year_in_seconds * 0.61519726,
    'mars': earth_year_in_seconds * 1.8808158,
    'jupiter': earth_year_in_seconds * 11.862615,
    'saturn': earth_year_in_seconds * 29.447498,
    'uranus': earth_year_in_seconds * 84.016846,
    'neptune': earth_year_in_seconds * 164.79132
  }
  return Number((seconds / ORBIT_in_SECONDS[planet]).toFixed(2));
};
