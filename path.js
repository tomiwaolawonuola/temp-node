
// const path = require('path')
// // console.log(path.sep)

// const filePath = path.join('/content/', 'subfolder', 'text.txt')

// // console.log(filePath)

// //basename

// const base = path.basename(filePath)

// // console.log(base)

// //absolute.resolve

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
// // console.log(absolute)

// console.log(absolute)

// console.log('hello world')

// const names = ['tayo', 'kenny']

// const moreNames = [...names, 'ojo']
// console.log(moreNames)



//

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }

]

// module.exports = notes



const http = require('http')

const server = http.createServer((req, res)=>{
         res.writeHead(200, {'Content-Type': 'text/plain'})
         res.end(JSON.stringify(notes))
})

const PORT = 3001

server.listen(PORT)
console.log(`server running on port ${PORT}`)

// console.log(notes)
