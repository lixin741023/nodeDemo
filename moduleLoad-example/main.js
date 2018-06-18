//加载一组相关的模块（将目录作为一整个模块引入），group1中通过1个index.js（只能是index.js）来引入其他的子模块。
const group1=require('./group1');
group1.a();
group1.b();
group1.c();
group1.d();

//加载一组相关的模块（将目录作为一整个模块引入），group2中通过1个package.json中的main字段的值，来引入其他的子模块。
const group2=require('./group2');
group2.a();
group2.b();
group2.c();
group2.d();


console.log(group1);
console.log(group2);

//总结：实际上，node在加载模块的时候，默认先找的是package.json，如果不存在，再寻找index.js。
