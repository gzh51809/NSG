import 'antd/dist/antd.css';
import React from 'react';
import { Drawer, Button, Radio } from 'antd';
import '../../styles/addcart.less';
import axios from 'axios';
const RadioGroup = Radio.Group;
class Addcart extends React.Component { 
  constructor(){
    super();
    this.state = { visible: false,
      placement: 'left',goodsimg:'',
      goodsdata: [],
      colorSelect: [],
      sizeSelect:[],
      currentIndex:0,
      currentActive: 0,
      value:1,
      isAdd:false,
      size:'',
      color:'',
      id:'',
      num:1,
      len:'',
      shopArr:[],
      cartId:[]
    }
    this.addCart=this.addCart.bind(this);
    this.getLens=this.getLens.bind(this);
  }
 
//  点击加入购物车或者购买的时候，出现遮罩层
  showDrawer = () => {
    // size得到尺码大小的对象
    var size = this.props.data.data.datas.goods_info.spec_value[15];
    console.log('size',size);
    var sizeArr = [];
// 将对象遍历出来，得到数组，只有尺寸的数组
    for(var key in size){
      sizeArr.push(size[key]);
    }
    console.log('sizeArr',sizeArr)
    // 颜色的写法与尺寸一样的写法
    var color = this.props.data.data.datas.goods_info.spec_value[1];
    var colorArr = [];
    for(var key in color){
      colorArr.push(color[key]);
    }
    // 将得到的数据渲染到页面上
    this.setState({
      visible: true,
      goodsimg: this.props.data.data.datas.goods_image,
      goodsdata: this.props.data.data.datas.goods_info,
      colorSelect: colorArr,
      sizeSelect: sizeArr,
    },()=>{
      console.log(this.state.goodsimg,this.state.goodsdata,this.state.colorSelect,this.state.sizeSelect)
    });
  };

  Highlighting(index,e){
    
    console.log(e.target.innerHTML);
    var currentSpan = index;
    this.setState({
      currentIndex: currentSpan,
      color:e.target.innerHTML,
    })
    
  }
  HighlightingSize(index,e){
    console.log(e.target.innerHTML);
     var currentSpan = index;
    this.setState({
      currentActive: currentSpan,
      size:e.target.innerHTML,
    })
  }

  onClose = () => {
    
    this.setState({
      visible: false,
    });
  }; 

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };
  // 点击-号商品数量减一
  minus(){ 
    var num=this.state.value;
    num--;
    if(num<=0){
      return;
    }
    this.setState({
        value:num
      })
  }
  // 点击+号，商品数量加一
  add(){
    var num=this.state.value;
    num++;
    this.setState({
      value:num
    })
  }
// 查询购物车的数据，获取购物车的商品的件数，与拿到购物车的所有商品，然后进行判断，所加的商品是否已经存在购物车中
  getLens(){
        var querystring = require('querystring');
       axios.post('http://localhost:3000/goods/getGoods',querystring.stringify({
          // id: goodId,
          user:77,
        }))
        .then((res)=>{
          console.log(res);
          let shop=res.data.data;
          let count=res.data.data.length;
          this.setState({
            shopArr:shop,
            len:count
          })
         
          
        })
        .catch((error)=>{
          console.log(error);
        })
      }


  addCart(){
    var querystring = require('querystring'); 
        // var currentId = this.props.match.params.id;
				// var user=sessionStorage.getItem('token');
        // console.log('sessionStorage',sessionStorage.getItem('token'))
        console.log(111)
    this.setState({
      cartId:this.state.shopArr.filter((item)=>{
        console.log(222)

        return item.id==this.props.id;
      }),
     
    },()=>{
      console.log(333)
      if(this.state.cartId.length>0){
        console.log(444)
        console.log('cartId=',this.state.cartId)
        console.log('value=',this.state.value)
        // 存在，数量+1
        let updataNum=this.state.value+this.state.cartId[0].qty;
        console.log('qty=',this.state.cartId[0].qty);
       
        console.log('updataNum',updataNum)
        axios.post('http://localhost:3000/goods/updateGoods',querystring.stringify({
          _id:this.state.cartId[0]._id,
          id:this.state.cartId[0].id,
          name:this.state.cartId[0].name,
          user:'77',
          price:this.state.cartId[0].price,
          imgurl:this.state.cartId[0].imgurl,
          qty: updataNum,
          size:this.state.cartId[0].size,
          color:this.state.cartId[0].color,
        }))
        .then((res)=>{
          console.log(res);
        })
        .catch((error)=>{
          console.log(error)
        })
        
      }else{
          // 第一次添加购物车
        console.log(555)

        axios.post('http://localhost:3000/goods/addGoods',querystring.stringify({
          id:this.props.id ,
          name:this.state.goodsdata.goods_name,
          user:'77',
          price:this.state.goodsdata.goods_price,
          imgurl:this.state.goodsimg,
          qty:this.state.value,
          size:this.state.size,
          color:this.state.color,
          
        }))
        .then((res)=>{
          console.log(res);
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    })		  
  }

  componentDidMount(){
    this.getLens()
  }
  render() {
    console.log(this.props.id)
    return (
      <div className="addcart">
          <div>
            <span className="service">客服</span>
            <span className="car">购物车 </span>
            <RadioGroup
              style={{ marginRight: 8 }}
              defaultValue={this.state.placement}
              onChange={this.onChange}
            >
            </RadioGroup>
            <Button type="primary" onClick={this.showDrawer} className="buy">
              立即购买
            </Button>
             <Button type="primary" onClick={this.showDrawer} className="addCar">
              加入购物车
            </Button>
            <Drawer
              placement='bottom'
              closable={true} 
              onClose={this.onClose}
              visible={this.state.visible}
              maskStyle={{backgroundColor: "rgba(0,0,0,.3)" }}
              height="320px"
            >
                <div className="Goods">
                 <div className="goods">
                   <div className="goodscon">
                     <img src={this.state.goodsimg} alt="" />
                     <div>
                       <p>{this.state.goodsdata.goods_name}</p>
                       <p><span>{this.state.goodsdata.goods_price}</span><span className="fRight">库存{this.state.goodsdata.goods_storage}</span></p>
                     </div>
                   </div>
                 </div>
                 <div className="goodsSelect">                
                   <div className="color">
                     <p>颜色:</p>
                     <p className="select">
                     {
                      (()=>{
                        return this.state.colorSelect.map((item,index)=>{
                          return (<span key={index} onClick={this.Highlighting.bind(this,index)} className={this.state.currentIndex===index?'active':''}>{item}</span>)
                        })
                      })()
                     }
                     </p>
                   </div>               
                   <div className="size">
                     <p>尺码:</p>
                     <p className="select">
                      {
                        (()=>{
                          return this.state.sizeSelect.map((item,index)=>{
                            return (<span key={index} onClick={this.HighlightingSize.bind(this,index)} className={this.state.currentActive===index?'active':''}>{item}</span>)
                          })
                        })()
                       }
                     </p>
                   </div>               
                 </div>
                 <div className="buynum">
                   <p>购买数量</p>
                   <p className="fRight">
                     <span className="minus" onClick={()=>{
                      this.minus()
                     }}>-</span><span className="num">{this.state.value}</span><span className="add" onClick={this.add.bind(this)}>+</span>
                   </p>
                 </div>
                 <div className="bottom">
                    <div className="service">客服</div>
                    <div>购物车</div>
                    <div className="buy">立即购买</div>
                    <div className="addCar" onClick={this.addCart}>加入购物车</div>
                 </div>
               </div> 
            </Drawer>
          </div>
      </div>
    );
  }
}

export default Addcart; 


//  <div className="Goods">
//   <div className="goods">
//     <div className="goodscon">
//       <img src="" alt="" />
//       <div>
//         <p>title</p>
//         <p><span></span><span></span></p>
//       </div>
//     </div>
//   </div>
//   <div className="goodsSelect">                
//     <div className="color">
//       <p>颜色:</p>
//       <p className="select"><span>1</span></p>
//     </div>               
//     <div className="size">
//       <p>尺码:</p>
//       <p className="select"><span>1</span></p>
//     </div>               
//   </div>
//   <div className="buynum">
//     <span>购买数量</span><span></span>
//   </div>
//   <div className="bottom">111111</div>
// </div> 