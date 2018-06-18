const fs=require('fs');

fs.readFile('./aaa.txt',(err,data)=>{
    console.log(data);
    console.log(Buffer.isBuffer(data));
    console.log(data.toString('utf8'));
});

