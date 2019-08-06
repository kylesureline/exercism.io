export const age = (planet, seconds) => {
  const earth = 31557600;
  const ORBIT_in_SECONDS = {
    earth,
    'mercury': earth * 0.2408467,
    'venus': earth * 0.61519726,
    'mars': earth * 1.8808158,
    'jupiter': earth * 11.862615,
    'saturn': earth * 29.447498,
    'uranus': earth * 84.016846,
    'neptune': earth * 164.79132
  }
  return Number((seconds / ORBIT_in_SECONDS[planet]).toFixed(2));
};
