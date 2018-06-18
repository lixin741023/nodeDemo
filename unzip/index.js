const fs=require('fs');
const unzip=require('unzip');

fs.createReadStream('./beauty.zip').pipe(unzip.Extract({ path: './' }));