const result = [];
const drone = {
    speed: 100,
    color: 'yellow',
}

const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})

console.log(result);
console.log(" ");

// map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// to get a specific value
console.log(bestBoxers.get(1));