const fs=require('fs');

fs.writeFile('./newtext.txt','hello',(err)=>{  //往newtext.txt文件写入内容’hello‘，如果txt文件不存在，则会自动创建
    if(err){console.log(err);return}else{
        console.log('文件写入成功');
    };
});

fs.appendFile('./newtext.txt',' world',(err)=>{ //往newtext.txt文件中追加内容，如果txt文件不存在，则自动创建
    if(err){console.log(err);return};
    console.log('文件内容追加成功');
});