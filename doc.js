
//where node runs
// console.log(process.versions.v8)


//getting path extention part of a filename
let path = require('path')

// let ext = path.extname('doc.js')
// console.log(ext)

let http = require('http')

const ip = '127.0.0.1'

const port = 3000

let fs = require('fs')

// console.log(fs)
const server = http.createServer((req, res)=>{
    //print request just for fun
    console.log('request', req.url)
    //Add . to URL to convert it to local file path
    let file = '.' + req.url
    //Redirect / t serve index.html
    if(file == '/') file = './index.html'
    //Extract requested file's extention
    let extention = String(path.extname(file)).toLowerCase()
    //Define acceptatble file extention
    let mime = {'html': 'text/html'}
    // //if requested file type is not mine, default
    //to octect-stream which mean "arbitrary binary data"
    let type = mime[extention]
    //Read the file from the hard drive
    fs.readFile(file, (err, result)=>{
        if(err){
            if(err.code == 'ENOENT'){
                fs.readFile('./404.html', (err, result)=>{
                    res.writeHead(200, {'Content-Type' : 'type'})
                    res.end(result, 'utf-8')
                })
            }else{
                res.writeHead(500)
                res.end("Error:" + err.code + '/n')
                res.end()
            }
        }else{
            res.writeHead(200, {'Content-Type': 'type'})
            res.end(result, 'uft-8')
        } 
    })

})


server.listen(port, ip)

console.log('running at http://' + ip + ':' + port + '/')

