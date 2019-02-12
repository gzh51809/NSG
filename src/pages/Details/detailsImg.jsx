import React,{Component} from 'react';
import '../../styles/details.less';
import axios from 'axios';
// import Footer from '../../components/Footer.jsx';
import { Link } from "react-router-dom"
class Detailsimg extends Component{
	constructor(props){
		super(props)
		// console.log(this.props);
		this.props = props;
		this.state={
			title: [{path:'/details/:id/',text: '商品'},{path:'/detailsimg/',text: '详情'},{path:'/evaluate/:id',text: '评价'}],
			active: 1,
			goodsData: '',
			id:''
		}
		var item = this.props.match.params;
		// console.log(item);
		var index=item.index;
		var id=item.id;
		// for(var key in item){
		    // index = item.index;
			// id = item.id
		// }

		// console.log(index,id);
		this.setState({
			active: index,
			id: id
		})
		// console.log(this.state.active);
		// this.getData(id);
		this.componentDidMount(id);
	}
	// getData(id){
	// 	//https://www.nanshig.com/mobile/index.php?act=goods&op=goods_body&goods_id=226880
	// 	axios.get(`https://www.nanshig.com/mobile/index.php?act=goods&op=goods_body&goods_id=${id}`)
	// 	.then((res)=>{
	// 	console.log(res);
	// 	var a = res.data;
	// 	this.setState({
	// 		goodsData : a,
			
	// 	})
	// 		// console.log(22222,this.state.bool);
	// 		// console.log(111,this.state.goods);
	// 	})
	// 	.catch((err)=>{
	// 		console.log(err);
	// 	})
	// }
	// mountwillditmount (){
	// 	this.getData(); 
	// 	// this.showTop();
	// 	// window.addEventListener('scroll',this.showTop)
	// }




	componentDidMount = (id) => {
		console.log(555)
	axios.get(`https://www.nanshig.com/mobile/index.php?act=goods&op=goods_body&goods_id=${id}`)
	.then(res => {
		var a = res.data;
	    this.setState({
	    	
	        goodsData : a,
	    });
	})
	.catch(error => {
		console.log(error);
	 });
	}
	componentWillUnmount = () => {
		this.setState = (state,callback)=>{
		  return;
		};
	}






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
					<div dangerouslySetInnerHTML = {{__html:this.state.goodsData}} className="imgs"></div>
				</div>
			);
	}
}
 
export default Detailsimg; 
 // aria-hidden="true"