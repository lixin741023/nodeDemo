const fs=require('fs');
const progress=require('progress-stream');

let stat=fs.statSync('test.txt');
console.log(stat);

console.log('-----------------------------------------------')

let stat_=progress({
    length:stat.size,
    time:10/*ms*/
});
// console.log(stat_)

stat_.on('progress',progress=>{
    console.log('**************************')
    console.log(progress)
    console.log('**************************')
})

console.log(stat_.progress())
// fs.createReadStream('test.txt')
//     .pipe(stat_)
//     .pipe(fs.createWriteStream('aaa.txt'));