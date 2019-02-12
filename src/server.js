
const express=require('express');
var request = require("request");
const bodyParser=require('body-parser')

const path=require('path')
//定义后端静态服务器 
var app = express();

const db=require('../mongodb/model/mongodb_connect.js');

app.use(bodyParser.urlencoded({ extended: false }))


// 引入路由
// 开启静态服务

app.use(express.static(path.join(__dirname,'./')))

const goodsRouter=require('../mongodb/router/goods.js');

// 使用路由
// app.use('/admin',adminRouter);
app.use('/goods',goodsRouter);


app.listen(3000);