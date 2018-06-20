var progress = require('progress-stream');
var req = require('request');
var fs = require('fs');

var str = progress({
    time: 10,
    length:0
});

str.on('progress', function(progress) {
    console.log(Math.round(progress.percentage)+'%');
});

req('http://cachefly.cachefly.net/100mb.test', { headers: { 'user-agent': 'test' }})
    .pipe(str)
    .pipe(fs.createWriteStream('test.data'));