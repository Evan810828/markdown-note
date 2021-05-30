var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'}); // HTTP Response 头部
    response.end('Hello World\n'); // 返回数据 “Hello World”
}).listen(8888); // 监听 8888 端口
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');