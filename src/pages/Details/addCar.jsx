import 'antd/dist/antd.css';
import React from 'react';
import { Drawer, Button, Radio } from 'antd';
import '../../styles/addcart.less';
const RadioGroup = Radio.Group;
class Addcart extends React.Component { 
  state = { visible: false,
   placement: 'left',goodsimg:'',
   goodsdata: [],
   colorSelect: [],
   sizeSelect:[],
   currentIndex:0,
   currentActive: 0,
   value:1
 };
  showDrawer = () => {
    var size = this.props.data.data.datas.goods_info.spec_value[15];
    var sizeArr = [];
    for(var key in size){
      sizeArr.push(size[key]);
    }
    var color = this.props.data.data.datas.goods_info.spec_value[1];
    var colorArr = [];
    for(var key in color){
      colorArr.push(color[key]);
    }

    this.setState({
      visible: true,
      goodsimg: this.props.data.data.datas.goods_image,
      goodsdata: this.props.data.data.datas.goods_info,
      colorSelect: colorArr,
      sizeSelect: sizeArr,
    });
    // console.log(333,this.state.goodsimg,'aaaaaaaaaa');
    // console.log(this.state.goodsdata,"bbbbbbbbbbbbbbb");
    // console.log(this.state.colorSelect,"CCCCCCCCC");
    // console.log(this.state.sizeSelect,"CCCCCCCCC");

  };

  Highlighting(index,e){
    console.log(index);
    console.log(e.target);
    var currentSpan = index;
    this.setState({
      currentIndex: currentSpan
    })
    console.log(this.state.currentIndex,999999999999999);
  }
  HighlightingSize(index,e){
     var currentSpan = index;
    this.setState({
      currentActive: currentSpan
    })
  }

  onClose = () => {
    // console.log(444);
    this.setState({
      visible: false,
    });
  }; 

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };
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
  add(){
    var num=this.state.value;
    num++;
    this.setState({
      value:num
    })
  }
  render() {
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
                    <div className="addCar">加入购物车</div>
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