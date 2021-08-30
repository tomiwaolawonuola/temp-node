

//npm -global command, comes with node
//npm --version

//local dependency - use it only in this project
//npm i <packageName>

//global depencency use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json -manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enta to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2, [3, [4]]]]

const newItems = _.flatMapDeep(items)

console.log(newItems)

