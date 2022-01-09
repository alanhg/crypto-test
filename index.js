const {KEYUTIL} = require('jsrsasign');
const fs = require('fs');
const privateKey = fs.readFileSync('./alanhe.sign.key', 'utf8');
const privateKeyObj = KEYUTIL.getKey(privateKey);
console.log(privateKeyObj.pubKeyHex);

