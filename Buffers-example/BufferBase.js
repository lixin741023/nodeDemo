let fs=require('fs');
fs.readFile('./text.txt',(err,buf)=>{//如果没有提供编码格式，那么文件操作以及很多网络操作，都会将数据作为Buffer类型来返回，fs.readFile就是个列子：
    console.log(`文件内容：  ${buf}`);
    console.log(Buffer.isBuffer(buf));//true      //读取文件，判断返回的是否是Buffer类型
});

