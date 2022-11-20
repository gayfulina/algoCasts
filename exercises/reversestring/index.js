// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str
        .split('')
        .reduce((rev, char) => char + rev, '')
}

module.exports = reverse;

//return str.split('').reverse().join('')

// let newStr = ''
// for (let i = str.length -1; i >= 0; i--) {
//     newStr += str[i]
// }
// return newStr


//    let newStr = ''
//     for (let i of str) {
//         newStr = i + newStr
//     }
//     return newStr