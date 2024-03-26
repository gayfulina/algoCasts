// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;


// const energyConsumptionByRegion = [
//   {"region": "Region A", "energy_consumption": 120},
//   {"region": "Region B", "energy_consumption": 85},
//   {"region": "Region A", "energy_consumption": 95},
//   {"region": "Region C", "energy_consumption": 150},
//   {"region": "Region B", "energy_consumption": 110},
//   {"region": "Region C", "energy_consumption": 130},
//   {"region": "Region A", "energy_consumption": 105},
//   {"region": "Region B", "energy_consumption": 90},
//   {"region": "Region C", "energy_consumption": 125},
//   {"region": "Region A", "energy_consumption": 100},
//   {"region": "Region B", "energy_consumption": 88},
//   {"region": "Region C", "energy_consumption": 135},
//   {"region": "Region A", "energy_consumption": 98},
//   {"region": "Region B", "energy_consumption": 92},
//   {"region": "Region C", "energy_consumption": 140},
//   {"region": "Region A", "energy_consumption": 102},
//   {"region": "Region B", "energy_consumption": 86},
//   {"region": "Region C", "energy_consumption": 128},
//   {"region": "Region A", "energy_consumption": 96},
//   {"region": "Region B", "energy_consumption": 87},
//   {"region": "Region C", "energy_consumption": 132},
//   {"region": "Region A", "energy_consumption": 99},
//   {"region": "Region B", "energy_consumption": 91},
//   {"region": "Region C", "energy_consumption": 137},
//   {"region": "Region A", "energy_consumption": 103},
//   {"region": "Region B", "energy_consumption": 89},
//   {"region": "Region C", "energy_consumption": 145},
//   {"region": "Region A", "energy_consumption": 97},
//   {"region": "Region B", "energy_consumption": 84},
//   {"region": "Region C", "energy_consumption": 126},
//   {"region": "Region A", "energy_consumption": 101},
//   {"region": "Region B", "energy_consumption": 83},
//   {"region": "Region C", "energy_consumption": 133},
//   {"region": "Region A", "energy_consumption": 94},
//   {"region": "Region B", "energy_consumption": 82},
//   {"region": "Region C", "energy_consumption": 138},
//   {"region": "Region A", "energy_consumption": 104},
//   {"region": "Region B", "energy_consumption": 80},
//   {"region": "Region C", "energy_consumption": 129},
//   {"region": "Region A", "energy_consumption": 93},
//   {"region": "Region B", "energy_consumption": 81},
//   {"region": "Region C", "energy_consumption": 131},
//   {"region": "Region A", "energy_consumption": 106},
//   {"region": "Region B", "energy_consumption": 79},
//   {"region": "Region C", "energy_consumption": 134},
//   {"region": "Region A", "energy_consumption": 92},
//   {"region": "Region B", "energy_consumption": 78},
//   {"region": "Region C", "energy_consumption": 136},
//   {"region": "Region A", "energy_consumption": 107},
//   {"region": "Region B", "energy_consumption": 77},
//   {"region": "Region C", "energy_consumption": 141},
//   {"region": "Region A", "energy_consumption": 91},
//   {"region": "Region B", "energy_consumption": 76},
//   {"region": "Region C", "energy_consumption": 127}
// ];
//
//
//
//
// const energyCons = (arr) => {
//   const hashMap = {};
// //   let max = 0;
//   let name = ''
//
//   for (let el of arr) {
//     if (!hashMap[el.region]) {
//       hashMap[el.region] = 0;
//     }
//     hashMap[el.region] += el.energy_consumption;
//   }
//
//   for (let el in hashMap) {
// //     if (hashMap[el] > max) {
//     if (!name || hashMap[el] > hashMap[name]) {
//       console.log(hashMap[el]);
//       console.log(hashMap[name]);
//       //max=hashMap[el];
//       name=el;
//     }
//   }
//   return hashMap
// }
//
//
// console.log(energyCons(energyConsumptionByRegion));

