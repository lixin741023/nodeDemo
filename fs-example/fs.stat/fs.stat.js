const fs=require('fs');

fs.stat('./hehe.txt',(err,info)=>{//读取hehe.txt的文件信息
   if(err){console.log(err);return};
   console.log(info);
   console.log(typeof  info);
   console.log(info.isFile());  //判断当前读取的是否是文件
   console.log(info.isDirectory());  //判断当前读取的是否是目录
});