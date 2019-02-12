import React,{Component} from 'react';
import '../../styles/details.less';

// import Footer from '../../components/Footer.jsx';
import { Link } from "react-router-dom"
class Evaluate extends Component{
	constructor(props){
		super(props)
		// console.log(this.props);
		this.state={
			title: [{path:'/details/:id',text: '商品'},{path:'/detailsImg/:id',text: '详情'},{path:'/evaluate/',text: '评价'}],
			active: 2,
			goodsData: '',
			id: ''
		}
		var item = this.props.match.params;
		// console.log(item);
		var index = item.index;
		var id = item.id;
		// for(var key in item){
		    // index = item.index;
			// id = item.id
		// }
		// console.log(index,id);
		this.setState({
			active: index,
			id: id
		})
		
	}
	// getData(id,index){
	// 	//https://www.nanshig.com/mobile/index.php?act=goods&op=goods_body&goods_id=226880
	// 	axios.get('https://www.nanshig.com/wap/js/tmpl/footer.js?_=1544250228961')
	// 	.then((res)=>{
	// 	console.log(res);
	// 	var a = res.data;
	// 	this.setState({
	// 		goodsData : a,
	// 		active: index
	// 	})
	// 		// console.log(22222,this.state.bool);
	// 		// console.log(111,this.state.goods);
	// 	})
	// 	.catch((err)=>{
	// 		console.log(err);
	// 	})
	// }
	// componentWillMount(){
	// 	this.getData(); 
	// 	// this.showTop();
	// 	// window.addEventListener('scroll',this.showTop)
	// }
	render(){
		return (
				<div className="detailsImg">
					<div className="top">
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
									return this.state.title.map((item,idx)=>{
										return <Link to={`${item.path}${this.state.id}`}
										 className={this.state.active===idx?'active':''} key={idx}><span>{item.text}</span></Link>
										
									})
								})()
							}
						</div>
						<div>
							<i className="iconfont icon-more"></i>
						</div>
					</div>
					<div className="christmas">
						<i className="iconfont icon-me"></i>
					</div>
				</div>
			);
	}
}
 
export default Evaluate; 
 // aria-hidden="true"