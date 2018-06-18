const MYa=require('./a.js');
const path=require('path');

console.log(
	require.resolve('./a.js')
);

console.log(
	require.resolve('path')
);

//node的require加载只会返回对象，而C是通过预处理器把代码加载到当前命名空间。
//node中的模块加载，将会被缓存。所以多次加载也只会返回同1个对象，所以多次require同1个模块，并不会存在消耗。
//总结：require.resolve(id)将会返回加载模`块的路径。

//additional：可以通过require.cache来卸载1个模块,但是需要提供模块的absolute path，所以通过require.resolve来获取最好不过。
//example：delete require.cache(require.resolve('./a.js'));返回true，表示成功卸载了。
//notice：这里的“卸载”指的是清除掉这个模块的缓存。
 
 