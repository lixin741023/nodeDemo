const fs=require('fs');

let fileReadStream=fs.createReadStream('./aaa.txt');    //创建1个读取的流
let fileWriteStream=fs.createWriteStream('./aaa1.txt'); //创建1个写入的流

fileReadStream.on('data',(content)=>{//读取到aaa.txt的内容
	console.log(content);
	fileWriteStream.write(content);//把“内容流”写入到aaa1.txt
});