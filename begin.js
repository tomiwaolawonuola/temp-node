// Modules
//modules allows you to distribute you code in different files
//CommonJS, every file is module (by default)
//Module -Encapsulated code (only share minimum)


const sayHi = (name)=>{
   console.log(`${name} is my name`)
}


module.exports = sayHi

const names = require('./modules')

sayHi(names.firstName)





