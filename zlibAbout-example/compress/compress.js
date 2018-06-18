const zlib=require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();
const inp = fs.createReadStream('aaa.txt');
const out = fs.createWriteStream('input.txt.gz');

inp.pipe(gzip).pipe(out);