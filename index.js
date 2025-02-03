import { calculate } from './Distance.js';

console.log(`30 feet is ${calculate('feet', 30).toFixed(3)} meters.`);
console.log(`9.144 meters is ${calculate('meters', 9.144).toFixed(3)} feet.`);
console.log(`5 miles is ${calculate('miles', 5).toFixed(3)} kilometers.`);
console.log(`8.04672 kilometers is ${calculate('kilometers', 8.04672).toFixed(3)} miles.`);
