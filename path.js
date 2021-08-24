
const path = require('path')
// console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'text.txt')

// console.log(filePath)

//basename

const base = path.basename(filePath)

// console.log(base)

//absolute.resolve

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)

