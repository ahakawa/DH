const bcrypt = require('bcrypt');
const fs = require('fs');

let hash = bcrypt.hashSync("12345", 10);

// console.log(bcrypt.compareSync("1234", hash))

const hashDescriptografada = fs.readFileSync(hash, {encoding: 'utf-8'})
const ab = JSON.parse(hashDescriptografada)

console.log(ab)