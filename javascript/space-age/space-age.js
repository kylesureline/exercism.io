export const age = (planet, seconds) => {
  const planets = {
    'earth': 31557600,
    'mercury': 7600543.81992,
    'venus': 19414149.052176,
    'mars': 59354032.69008,
    'jupiter': 374355659.124,
    'saturn': 929292362.8848,
    'uranus': 2651370019.3296,
    'neptune': 5200418560.032
  }
  return parseFloat((seconds / planets[planet]).toFixed(2));
};
