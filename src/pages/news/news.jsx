import React,{Component} from 'react';
import '../../styles/news.less';
import Footer from '../../components/Footer.jsx';

class News extends Component{
	render(){
		return (
				<div className='cart'>
					<div className="header">
						<div className="top">
							<div className="homeimg">
								<i className="iconfont icon-home"></i>
							</div>
							<div className="gologin">登陆</div>
						</div>
						<div className="center">
							<div className="user">
								<span>账户</span><input type="text" value="用户名/邮箱/已验证手机" />
							</div>
							<div>
								<span>密码</span><input type="text" value="登陆密码" />
							</div>
						</div>
						<div className="bottom">
							<div><span>七天自动登陆</span><span><a href="https://www.baidu.com" >忘记密码?</a></span></div>

							<input type="button" value="登陆" />
						</div>
					</div>
					<div className="login">
						<div>
							<span></span>
							<span className="text">合作账号登陆</span>
							<span></span>
						</div>
						<div className="icon">
							<div className="weibo">
							    <i className="iconfont icon-weibo"></i>
							</div><div className="qq">
								<i className="iconfont icon-QQ"></i>
							</div>
						</div>
						<input type="button" value="手机注册" />
						
					</div>
					<Footer />
				</div>
			);
	}
}
 
export default News; 
 // aria-hidden="true"