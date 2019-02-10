import React,{Component} from 'react';
import Footer from '../../components/Footer.jsx';
import "../../styles/cart.less";

class Cart extends Component{
	render(){
		return (
				<div className='cart'>
					<div className="header-wrap">
					    <div className="header-l"> 
					    	<a href="javascript:history.go(-1)"> 
					    		<i className="iconfont icon-jiantou2">  </i> 
					    	</a> 
					    </div>
					    <div className="header-title">
					      	<h1>购物车</h1>
					    </div>
					    <div className="header-r">
					     <a id="header-nav" href="javascript:void(0);">
					     	<i className="more"> . . .</i>

					     	</a>
					    </div>
					</div>
					<div className="cart_goods">
						<div className="store">
							<input type="checkbox" id="checkbox" name="" />
							<i className="iconfont icon-dianpu"></i>	
							<h3>潮男搭配师</h3>
						</div>
						<div className="cart_list">
							<ul>
								<li>
									<input type="checkbox" className="check" name=""/>
									<div className="cart_img">
										<img src="https://www.nanshig.com/data/upload/shop/store/goods/15/15_05568210075361967_360.jpg" />
									</div>
									<div className="good_list">
										<div className="cart_title">
											<div className="name"><p>潮男长袖T恤秋冬百搭彩色条纹高领打底衫宽松纯棉T恤男 黄色 XL</p> <span> <i className="iconfont icon-shanchu" ></i></span></div>
										</div>
										<div className="price_qty">
											<span className="price">
												￥ 123
											</span>
											<span className="qty">
												<input type="button" value="-" className="sub" name=""/>
												<input type="text" className='txt' value="1" name=""/>
												<input type="button" value="+" className="add" name=""/>
											</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<Footer />

					</div>
				</div>
				);

		}
}

export default Cart; 