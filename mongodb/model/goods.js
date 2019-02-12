const mongoose=require('mongoose');
let Schema=mongoose.Schema;
let goodsSchema=new Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    user:{type:String,required:true},
	price:{type:Number,required:true},
	imgurl:{type:String,required:true},
	qty:{type:Number,required:true},
    size:{type:String,required:false},
    color:{type:String,required:false}
})
// 还需要将schema 对象转化为数据模型
// var Blog = mongoose.model('Blog',blogSchema);
let goods=mongoose.model('goods',goodsSchema);

module.exports=goods
