const fs=require('fs');
const request=require('request');
const progress=require('progress-stream');
const unzip=require('unzip');

let fileSIze=''
let download_progress=progress({
    time:1000,
    length:'0'
});
download_progress.on('progress',(info)=>{
    console.log('**************************');
    console.log(info);
    fileSIze=info.length;
    console.log(`当前占比${info.percentage}%`);
});

let unzip_progress=progress({
   time:500,
   length:0
});
unzip_progress.on('progress',(info)=>{
    console.log('----------------------------')
    console.log(info)
    console.log(`解压进度：${(info.transferred/fileSIze*100).toFixed(1)}%`);
})

request('http://192.168.214.100/test3.zip',()=>{
    console.log('下载完成');
    handuleFile();
}).pipe(download_progress).pipe(fs.createWriteStream('aaa.zip'))

function handuleFile(){
    setTimeout(()=>{
        console.log('开始解压');
        fs.createReadStream('./aaa.zip').pipe(unzip_progress).pipe(unzip.Extract({path:'./'}));
        console.log('解压完成')
    },2000)
    console.log('异步测试')
};

