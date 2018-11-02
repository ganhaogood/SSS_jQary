//引入express模块


var express = require('express');
var app = express();

const comment=require('./src/data/comment.json')
const index=require('./src/data/index.json')
const item=require('./src/data/item.json')
const service=require('./src/data/service.json')

app.get('/leftNav', function (request, response) {
  //返回响应
  response.set('Access-Control-Allow-Origin','*');
  response.send(index);
})
app.get('/service', function (request, response) {
  //返回响应
  response.set('Access-Control-Allow-Origin','*');
  response.send(service);
})
app.get('/item', function (request, response) {
  //返回响应
  response.set('Access-Control-Allow-Origin','*');
  response.send(item);
})
app.get('/comment', function (request, response) {
  //返回响应
  response.set('Access-Control-Allow-Origin','*');
  response.send(comment);
})
//监听端口号，开启服务器
app.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})