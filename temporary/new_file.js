const zlib=require('zlib');
const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
zlib.unzip(buffer, (err, buffer) => {
    if (!err) {
        console.log(buffer.toString());
    } else {
        // 错误处理
    }
});





