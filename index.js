const {KEYUTIL} = require('jsrsasign');
const crypto = require('crypto');
const fs = require('fs');
const privateKey = fs.readFileSync('./alanhe.sign.key', 'utf8');
const privateKeyObj = KEYUTIL.getKey(privateKey);
console.log(privateKeyObj.pubKeyHex);

const md5Msg = crypto.createHash('md5').update('123').digest("hex");
console.log(md5Msg);


