export const age = (planet, seconds) => {
  const earth_year_in_seconds = 31557600;
  const orbital_period_in_years = {
    'earth': 1,
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
  }

  const orbital_period_in_seconds = earth_year_in_seconds * orbital_period_in_years[planet];
  const orbital_period_in_earth_years = seconds / orbital_period_in_seconds;

  return Number(orbital_period_in_earth_years.toFixed(2));
};
