//req = incoming request

//res is what we are sending back

// const http = require('http')

// const server = http.createServer((req, res)=>{
//      console.log(req)
//      res.write('this is courgeous')
//      res.end()
// })


// server.listen(5000)

// //FOR THE HOME PAGE

const http = require('http')

const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.end('Welcome to the home page')
    }

    else if (req.url === '/about'){
        res.end('welcome to our about us page')
    }


    else{
        res.end(`<h1> We cant seem to find the page you are looking for </h1>
                  <a href ="/"> back to home page </a>
        `)
    }

    
})

server.listen(5000)





// console.log('it works!')


