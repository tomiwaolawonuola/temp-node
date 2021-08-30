
//EVENT LOOP, ASYNC PATTERN, EVENT EMITTERS & STREAMS

//[Event loop allows Node.js to perform non-blocking Input/Output operations 
// despite the fact that JavaScript is single threaded by 
//OFFLOADING operations to the system kernel whenever possible ]

//MAIN CONCEPTS

//PRE-BUILT CODES []

// EVENT LOOP IN SHORT: Request comes in, register the call back, complete and execute call back

//CODE EXAMPLES

// console.log('first task')

// console.time()
// for (let i = 0; i < 1000000; i++){
//     const age = 34
//     console.log(age)
// }

// console.timeEnd()

// console.log('next task')

// console.log('the first task')

// setTimeout(()=>{
//     console.log('second task')
// }, 0)

// console.log('next task')


// const {readFile} = require('fs')

// console.log('started first task')

// //CHECK FILE PATH

// readFile('./content/first.txt', 'utf-8', (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     else{
//        console.log(result)
//        console.log('completed first task')
//     }
// })

// console.log('starting next task')

//SETINTERVAL EXAMPLE
//seInterval run in increament

// setInterval(()=>{
//     console.log('hello world')
// }, 2000)

// console.log('i will run first')

//SERVER EXAMPLE

// const http = require('http')

// const server = http.createServer((req, res)=>{
//     console.log('request event')
//     res.end('Hello World')
// })

// const PORT = 3000

// server.listen(PORT, ()=>{
//     console.log('server is listening on port:' + PORT)
// })

//ASYNC PATTERN IN NODE JS

//BLOCKING
// const http = require('http')

// const server = http.createServer((req, res)=>{
//        if(req.url === '/'){
//            res.end('home page')
//        } if(req.url === '/about' ){
//            res.end('about page')
//            for(let i = 0; i < 1000; i++){
//                for (let j = 0; j < 1000; j++){
//                    console.log(`${i} ${j}`)
//                }
//            }
//            res.end('About page')
//        }
// })

// server.listen(5000, ()=>{
//     console.log('server is listning on port: 5000....')
// })


//ASYNC FILE SYSTEM

const {readFile} = require('fs')
// readFile('./content/first.txt', 'utf-8', (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     else{
//        console.log(result)
//     }
// })

//PERFORMING MULTIPLE ACTIONS OF READING FILE
//USING PROMISE


const firstFile = './content/first.txt'

const getFile = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf-8', (err, data)=>{
            if(err){
                return
                reject(err)
            }else{
                resolve(data )
            }

        })
    })
}

// getFile(firstFile)
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

//USING ASYNC wit the Promise
const start = async () => {
    try{
        const first = await getFile(firstFile)
        console.log(first)
    }
    catch(error){
         console.log(error)
    }
}
start()

