const express=require('express');
const Router =express.Router();
const Goods=require('../model/goods.js');
const bodyParser=require('body-parser');


/**
 * @api {post} /goods/addGoods/ addGoods
 * @apiName addGoods
 * @apiGroup goods
 *
 * @apiParam {String} name  商品名称
 * @apiParam {String} type 商品类型
 * @apiParam {String} desc 商品描述
 * @apiParam {String} price 商品价格
 * @apiParam {String} imgpath 图片地址
 * @apiParam {Number} stock 商品余额
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
// 增加商品路由
Router.post('/addGoods',bodyParser.urlencoded({ extended: false }),(req,res)=>{
	res.append("Access-Control-Allow-Origin", "*")
	// 1接收数据
	let {id,name,user,price,imgurl,qty,size,color}=req.body;
	console.log(id,name,user,price,imgurl,qty,size,color)
	Goods.insertMany({id,name,user,price,imgurl,qty,size,color})
	.then((data)=>{
		// res.send(data)
		res.send({err:0,msg:'插入成功',data:null})
	})
	.catch((err)=>{
		console.log(err)
		// res.send('插入错误')
		res.send({err:-1,mag:'插入失败',data:null});
	})

})


// 查询商品
Router.post('/getGoods',(req,res)=>{
	res.append("Access-Control-Allow-Origin", "*")
// Goods.find()查询所有
// Goods.find({tyle:'音乐'})     分类查询
// Goods.find().limit(5).skip(5)  分页查询
	// let {pagesize,page}=req.query;
	// let {pagesize,page}=req.body;

	// let obj={}
	// console.log(111)
	// Goods.find({name,type,desc,price,imgpath,stock})
	let user=req.body.user;
	Goods.find({user:user})
	.then((data)=>{
		// res.send(data)
		// obj.goodslist=data
		res.send({err:0,msg:'查询成功',data:data})
	})
	.catch((err)=>{
		console.log(err)
		// res.send('插入错误')
		res.send({err:-1,mag:'查询错误',data:null});
	})
})

// 修改商品
Router.post('/updateGoods',(req,res)=>{
	res.append("Access-Control-Allow-Origin", "*")
// 获取商品的唯一索引   主键（——id）
// 获取修改的值
// res.send('aaaa');
// 执行修改
	let _id=req.body._id;
	// let user=req.body.user;
	console.log(_id);
	// let stock=Number(req.body.stock);
	let {id,name,user,price,imgurl,qty,size,color}=req.body
	console.log(id,name,user,price,imgurl,qty,size,color);
	console.log(typeof(price));
	Goods.updateMany({_id:_id},{id,name,user,price,imgurl,qty,size,color})
	// Goods.updateMany({_id:id},{stock})
	.then((data)=>{
		// res.send(data)
		// res.send({err:0,msg:'修改成功',data:data})
		 Goods.find({user:user})
		 .then((data)=>{
		 	 res.send({err:0,msg:'修改成功',data:data})
		 })
		 .catch((error)=>{
		 	console.log(error)
		 })
	})
	.then((data)=>{
		console.log(11,res)
	})
	.catch((err)=>{
		console.log(err)
		// res.send('插入错误')
		res.send({err:-1,mag:'修改不成功',data:null});
	})

	
})



//删除商品

/**
 * @api {post} /goods/delGood/ delGood
 * @apiName delGood
 * @apiGroup goods
 *
 * @apiParam {String} id  要删除的商品的主键id
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */

// 删除商品
Router.post('/delGood',(req,res)=>{
	res.append("Access-Control-Allow-Origin", "*")
// 获取商品的唯一索引   主键（——id）
// 获取修改的值
// 执行修改
	let id=req.body._id;
	let user=req.body.user;
	console.log(id);
	Goods.deleteMany({_id:id,user:user})
	.then((data)=>{
		// res.send(data)
		// res.send({err:0,msg:'删除成功',data:data})
		Goods.find({user:user})
		.then((data)=>{
			 res.send({err:0,msg:'删除成功',data:data})
		})
		.catch((error)=>{
			console.log(error)
		})
	})
	.catch((err)=>{
		console.log(err)
		// res.send('插入错误')
		res.send({err:-1,mag:'删除不成功',data:null});
	})
})






module.exports=Router;
