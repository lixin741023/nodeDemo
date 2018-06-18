const fs=require('fs');


fs.readFile('./text.rar',(err,buf)=>{
    if(err){console.log(err);return};
    console.log(Buffer.isBuffer(buf));
    console.log(`转换前：  ${buf}`);
    console.log(`转换后：  ${buf.toString()}`);
});