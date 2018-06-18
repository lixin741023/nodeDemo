const zlib=require('zlib');
const fs = require('fs');

const gzip = zlib.createGunzip();
const inp = fs.createReadStream('input.txt.gz');
const out = fs.createWriteStream('aaa.txt');


inp.pipe(gzip).pipe(out);