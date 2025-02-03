function feetToMeters(feet) {
  return feet * 0.3048;
}

function metersToFeet(meters) {
  return meters * 3.28084;
}

function milesToKm(miles) {
  return miles * 1.60934;
}

function kmToMiles(kilometers) {
  return kilometers * 0.621371;
}

function calculate(unit, value) {
  if (unit === 'feet') return feetToMeters(value);
  if (unit === 'meters') return metersToFeet(value);
  if (unit === 'miles') return milesToKm(value);
  if (unit === 'kilometers') return kmToMiles(value);
}

module.exports = { calculate };
