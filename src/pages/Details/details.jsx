import React from 'react';
import axios from 'axios';
import '../../styles/details.less';
import Addcar from './addCar.jsx';
import { Link } from "react-router-dom"
// import antd from 'antd';
class Content extends React.Component{
	constructor(props){
		super(props)
		this.state={
			goods: {},
			bool: false,
			goodsDetail: [],
			goodsname: '',
			Text1 : '',
			Text2 : '',
			Text3 : '',
			miaosu: '',
			fahuo : '',
			fuwu : '',
			b: "222222",
			goodsList: [],
			goodsCon: [],
			show: false, 
			id:'',
			title: [{path:'/details/',text: '商品'},{path:'/detailsImg/',text: '详情'},{path:'/evaluate/:id',text: '评价'}],
			// title: [{path:'/details/:id',text: '商品'},{path:'/home',text: '详情'},{path:'/cart',text: '评价'}],
			active: 0

		}
	}
	// 获取数据
	getData(props){
		var currentId = this.props.match.params.id;
		axios.get(`https://www.nanshig.com/mobile/index.php?act=goods&op=goods_detail&goods_id=${currentId}&key=`)
		.then((res)=>{
			// console.log(res.data.datas.goods_info.goods_spec);
			var goodsSize = res.data.datas.goods_info.goods_spec;
			var goodsColor = []
			for(var key in goodsSize){
				goodsColor.push(goodsSize[key]);

			}
			// console.log(goodsColor);
			var result = true; 
			var data = res.data.datas;
			var currentId = data.goods_info.goods_id;
			var name = data.goods_info.goods_name;
			var price = data.goods_info.goods_price;
			var text1 = data.goods_hair_info.area_name;
			var text2 = data.goods_hair_info.if_store_cn;
			var text3 = data.goods_hair_info.content;
			var miaoS = data.store_info.store_credit.store_deliverycredit;
			var faH = data.store_info.store_credit.store_desccredit;
			var fuW = data.store_info.store_credit.store_servicecredit;
			var goodslist = data.goods_commend_list;
			var goodsdata = res;
			// console.log(data.goods_commend_list);
			this.setState({
				bool: result,
				goods: goodsdata,
				goodsDetail : data, 
				goodsname : name,
				goodsprice : price,
				Text1 : text1,
				Text2 : text2,
				Text3 : text3,
				miaosu : miaoS ,
				fahuo : faH,
				fuwu : fuW,
				goodsList : goodslist,
				goodsCon: goodsColor,
				id: currentId
			})
			// console.log(currentId);
			// console.log(22222,this.state.bool);
			// console.log(111,this.state.goods);
		})
		.catch((err)=>{
			console.log(err);
		})
	}
	showTop(){
		var a =true;
		if(window.scrollY>=100){

			a=true;
			this.setState({
				show: a
			})
		}else{
			a=false
			this.setState({
				show: a
			})
		}
		// this.setState({
		// 	show: a
		// })
		// this.setState({
		// 	show : true 
		// })
		// console.log(1111);
	}
	componentWillMount(){
		this.getData(); 
		// this.showTop();
		// window.addEventListener('scroll',this.showTop)
	}
	 componentDidMount(){
	 	window.addEventListener('scroll',this.showTop.bind(this))

	 }	





	//  	componentDidMount = (id) => {
	// axios.get(`https://www.nanshig.com/mobile/index.php?act=goods&op=goods_body&goods_id=${id}`)
	// .then(res => {
	// 	var a = res.data;
	//     this.setState({
	    	
	//         goodsData : a,
	//     });
	// })
	// .catch(error => {
	// 	console.log(error);
	//  });
	// }
	// componentWillUnmount = () => {
	// 	this.setState = (state,callback)=>{
	// 	  return;
	// 	};
	// }



	render(){
		return (
			<div>
        		 <div>
					<div className="details">
					{this.state.show?<div className="top">
						<div>
						<Link to="/home">
							<i className="iconfont icon-jiantouarrowhead7"></i>
							</Link>
						</div>
						<div className="selectGoods">
							{/*<span>商品</span>
							<span>详情</span>
							<span>评价</span>*/}
							{
								(()=>{
									return this.state.title.map((item,index)=>{
										return <Link to={`${item.path}${this.state.id}`}
										 className={this.state.active===index?'active':''} key={index}><span>{item.text}</span></Link>
									})
								})()
							}
						</div>
						<div>
							<i className="iconfont icon-more"></i>
						</div>
					</div>:null}

				
						<div className="goodsImg">
							<img src={this.state.goodsDetail.goods_image} alt="" className="detailIMG"/>
						</div>
						<div className="msk">
						</div>
						<div className="con">
							<div className="goods">
								{/*<div>
									<img src={this.state.goodsDetail.goods_image} alt="" className="detailIMG"/>
								</div>*/}
								<p className="title">{this.state.goodsname}</p>
								<p className="price"><span>{this.state.goodsprice}</span><span>销量</span></p>
								<p><span>{this.state.Text1}</span><span>{this.state.Text2}</span><span>{this.state.Text3}</span></p>
								<p>
									<span>已选</span>
									{
										(()=>{
											return this.state.goodsCon.map((item,index)=>{
												return 	<span key={index}>{item}</span>
											})
										})()
									}
									</p>
							</div>
							<p className="evaluate">商品评价</p>
							<div className="shop">
								<p className="name">潮衣阁</p>
								<p><span>{this.state.miaosu.text}</span>{this.state.miaosu.credit}<span>{this.state.fahuo.text}</span>{this.state.fahuo.credit}<span>{this.state.fuwu.text}</span>{this.state.fuwu.credit}</p>
							</div>
							<div className="goodslist">
								<p>店铺推荐</p>
								<ul>
									{
										(()=>{
											return this.state.goodsList.map((item,index)=>{
											return <li key={index}>
														<img src={item.goods_image_url} alt="" />
														<p>{item.goods_name}</p>
														<span>{item.goods_promotion_price}</span>
													</li>
											})
										})()
									}
								</ul>
							</div>
							<div className="more">查看更多</div>
						</div>
						<Link className="goPage" to="/home/">
							<i className="iconfont icon-jiantouarrowhead7"></i>
						</Link>
						<div className="mores" >
							<i className="iconfont icon-more"></i>
						</div>
						<div className="like">
							<i className="iconfont icon-icon-test"></i>
						</div>
					</div>
					｛this.state.goods?<Addcar data={this.state.goods}/>: null｝
				</div>
			</div>
		)
	}

}
export default Content;




// {	
// 				(()=>{
// 					if(this.state.bool){
//                 		return <div>
// 							<div className="details">
// 						{/*<div className="top">1111</div>*/}
// 								<div className="goodsImg">
// 									<img src={this.state.goodsDetail.goods_image} alt="" className="detailIMG"/>
// 								</div>
// 								<div className="msk">
// 								</div>
// 								<div className="con">
// 									<div className="goods">
// 										{/*<div>
// 											<img src={this.state.goodsDetail.goods_image} alt="" className="detailIMG"/>
// 										</div>*/}
// 										<p className="title">{this.state.goodsname}</p>
// 										<p className="price"><span>{this.state.goodsprice}</span><span>销量</span></p>
// 										<p><span>{this.state.Text1}</span><span>{this.state.Text2}</span><span>{this.state.Text3}</span></p>
// 										<p><span>已选</span><span>颜色</span><span>尺码</span></p>
// 									</div>
// 									<p className="evaluate">商品评价</p>
// 									<div className="shop">
// 										<p className="name">潮衣阁</p>
// 										<p><span>{this.state.miaosu.text}</span>{this.state.miaosu.credit}<span>{this.state.fahuo.text}</span>{this.state.fahuo.credit}<span>{this.state.fuwu.text}</span>{this.state.fuwu.credit}</p>
// 									</div>
// 									<div className="goodslist">
// 										<p>店铺推荐</p>
// 										<ul>
// 											{
// 												(()=>{
// 													return this.state.goodsList.map((item,index)=>{
// 													return <li key={index}>
// 																<img src={item.goods_image_url} alt="" />
// 																<p>{item.goods_name}</p>
// 																<span>{item.goods_promotion_price}</span>
// 															</li>
// 													})
// 												})()
// 											}
// 										</ul>
// 									</div>
// 									<div className="more">查看更多</div>
// 								</div>
// 								<div></div>
// 							</div>
// 							｛this.state.goods?<Addcar data={this.state.goods}/>: null｝
							
// 						</div>
// 					}
// 				})()
// 			}

// return (<Addcar goods={this.state.goods}/>
// <div>
// 	<div className="details">
// 		<div className="con">
// 			<div className="goods">
// 				<div>
// 					<img src={this.state.goodsDetail.goods_image} alt="" className="detailIMG"/>
// 				</div>
// 				<p className="title">{this.state.goodsname}</p>
// 				<p className="price"><span>{this.state.goodsprice}</span><span>销量</span></p>
// 				<p><span>{this.state.Text1}</span><span>{this.state.Text2}</span><span>{this.state.Text3}</span></p>
// 				<p><span>已选</span><span>颜色</span><span>尺码</span></p>
// 			</div>
// 			<p className="evaluate">商品评价</p>
// 			<div className="shop">
// 				<p className="name">潮衣阁</p>
// 				<p><span>{this.state.miaosu.text}</span>{this.state.miaosu.credit}<span>{this.state.fahuo.text}</span>{this.state.fahuo.credit}<span>{this.state.fuwu.text}</span>{this.state.fuwu.credit}</p>
// 			</div>
// 			<div className="goodslist">
// 				<p>店铺推荐</p>
// 				<ul>
// 					{
// 						(()=>{
// 							return this.state.goodsList.map((item,index)=>{
// 							return <li key={index}>
// 										<img src={item.goods_image_url} alt="" />
// 										<p>{item.goods_name}</p>
// 										<span>{item.goods_promotion_price}</span>
// 									</li>
// 							})
// 						})()
// 					}
// 				</ul>
// 			</div>
// 			<div className="more">查看更多</div>
// 		</div>
// 	</div>
// 	<Addcar goods={this.state.goods}/>
// </div>
// )