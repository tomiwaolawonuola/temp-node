
//Implementing our server code directly with Node's built-in http web server is possible. 
//However, it is cumbersome, especially once the application grows in size.

// const notes = require('./path')

// const person = { oruko: 'arto', age: 23 }

// const json  = JSON.stringify(person)

// console.log(json)

// console.log(typeof json)


// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2019-05-30T17:30:31.098Z",
//     important: true
//   },
//   {
//     id: 2,
//     content: "Browser can execute only Javascript",
//     date: "2019-05-30T18:39:34.091Z",
//     important: false
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     date: "2019-05-30T19:20:14.298Z",
//     important: true
//   }

// ]



const notes = require('./notes')

// console.log(notes)



const express = require('express')


const app = express()

// app.get('/', (req, res)=>{
//     res.send('<h1> Hello World! </h1>')
// })

// app.get('/', (req, res)=>{
//     res.json(notes)

// })

// const PORT = 3000
// app.listen(PORT, ()=>{
//     console.log(`server is live at ${PORT}`)
// })


//REST

// URL	verb	functionality
// notes/10	GET	fetches a single resource
// notes	GET	fetches all resources in the collection
// notes	POST	creates a new resource based on the request data
// notes/10	DELETE	removes the identified resource
// notes/10	PUT	replaces the entire identified resource with the request data
// notes/10	PATCH	replaces a part of the identified resource with the request data

app.get('/nodejscourse/notes/:id', (req, res)=>{
    const id = res.params.id
    const note = notes.find(note => note.id === id)
    console.log(note)
    res.json(note)

})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`server is live at ${PORT}`)
})



