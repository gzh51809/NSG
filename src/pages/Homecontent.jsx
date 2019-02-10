import React,{ Component } from 'react';
import '../styles/Homecontent.less';
import axios from 'axios';
// 路由跳转
import { Link } from "react-router-dom"

import Footer from '../components/Footer.jsx';


// 引入轮播图
import ReactSwiper from 'reactjs-swiper';

// 轮播图组件
const ReactSwiperExample = (props) => {
	// console.log(props);
	var items = [];
	for(var i=0;i<props.banner.length;i++){
		items.push({ 
			image: props.banner[i].image,
			title: props.banner[i].data,
			link: props.banner[i].type
		})
	}
  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false 
  };
  return (
    <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                 className="swiper-example" />
  );
};

class Homecontent extends Component{
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			goodslist : [],
			banner: [],
			// path: '/Details'
		}
	}
	// 获取页面数据
	getData(){
		axios.get('https://www.nanshig.com/mobile/index.php?act=index')
		.then((res)=>{
			// console.log(res);
			var data = res.data.datas;
			var goods = [];
			var banners = data[0].adv_list.item;
			for(var i=0;i<data.length;i++){
				if(i>0){
					goods.push(data[i]);
				}	
			}
			this.setState({
				 goodslist : goods,
				 banner : banners
			})
		})
		.catch((err)=>{
			console.log(err);
		})
	}
	componentDidMount(){
		this.getData();
	}
	render(){
		return (
			<div className="Homecontent">
				<div className="bannerBox">
					<div className="banner">
						<ReactSwiperExample banner={this.state.banner}/>
					</div>
				</div>
				{
					(()=>{
						return this.state.goodslist.map((items,index)=>{
							return (
								<div className="goods" key={index}>
									<p className="title">{items.goods.title}</p>
									<ul>
										{
											(()=>{
												return items.goods.item.map((item,index)=>{
													return (
														<li key={index}> 
														<Link to={`/details/${item.goods_id}`} > 
														
			 												<img src={item.goods_image} className="goodsImg" alt=""/>

			 												<p>{item.goods_name}</p>
			 												<p className="price">{item.goods_price}</p>
			 											</Link>
			 											</li>
														)
													})
											})() 
										}
									</ul>
								</div>
							)
						})
					})()
				}
				<Footer/>
			</div>

		);
	}
}
export default Homecontent;
