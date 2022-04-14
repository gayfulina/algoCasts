// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const cleanStringA = cleanString(stringA)
    const cleanStringB = cleanString(stringB)
    return cleanStringA === cleanStringB;
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;



// function anagrams(stringA, stringB) {
//     let aCharMap = buildCharMap(stringA);
//     let bCharMap = buildCharMap(stringB);
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     }
//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// function buildCharMap(str) {
//     const charMap = {};
//
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }









// function anagrams(stringA, stringB) {
//     const a = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().toString();
//     const b = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().toString();
//     return (a === b) ? 'True' : 'False';
// }


// function isAnagrams(str1, str2) {
//     if (str1.length !== str2.length) return false;
//
//     const obj = {};
//     for(let char of str1) {
//         if (obj[char]) {
//             obj[char] +=1;
//         } else {
//             obj[char] = 1
//         }
//     }
//
//     const obj2 = {};
//     for(char of str2) {
//         if (obj2[char]) {
//             obj2[char] +=1;
//         } else {
//             obj2[char] = 1
//         }
//     }
//
//
//     for (let char in obj) {
//         if (obj[char] !== obj2[char]){
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isAnagrams('rail safety', 'fairy tales'))







// function objF(str) {
//
//     const obj = {};
//     for(let char of str) {
//         if (obj[char]) {
//             obj[char] +=1;
//         } else {
//             obj[char] = 1
//         }
//     }
//     return obj;
// }
//
// function isAnagrams(str1, str2) {
//     if (str1.length !== str2.length) return false;
//     const obj1 = objF(str1)
//     const obj2 = objF(str2)
//
//     for (let char in obj1) {
//         if (obj1[char] !== obj2[char]){
//             return false;
//         }
//     }
//     return true
// }
//
// console.log(isAnagrams('rail safety', 'fairy tales'))
