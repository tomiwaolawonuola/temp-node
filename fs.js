//FS module
//we destrcutre this from the module
// const {readFileSync, writeFileSync} = require('fs')

// const fisrt = readFileSync('./content/first.txt', 'utf-8')
// const second = readFileSync('./content/second.txt', 'utf-8')
// // console.log(fisrt, second)

// writeFileSync('./content/result-sync.txt', 
// `here is the first ${fisrt}, ${second}`, {flag: 'a'}
// )

//Doing it asychcronously 


const {readFile, writeFile} = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf-8', (err, result)=>{
  if(err){
      console.log(err)
      return;
  }
  const first = result
  readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
   const second = result
   writeFile('./content/result-async.txt', `this is the result ${first}, ${second}`, (err, result)=>{
       if(err){
           console.log(err)
           return
       }
       console.log('done with this task')
   })
  })

})

console.log('starting next task')
 

 