import React from 'react';

import { NavLink} from "react-router-dom";
import  '../styles/footer.less';

// import { Link } from "react-router-dom";

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  render(){
    return (
        <footer id="footer">
         <div id="footnav" className="footnav clearfix">
          <ul>
            <li> 
              <NavLink activeClassName="sele" to="/home/">
                <i className="home">
                </i>
                <p>首页</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="sele" to="/classify/">
                <i className="categroy"></i>
                <p>分类</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="sele" to="/news/">
                <i className="search"></i>
                <p>消息</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="sele" to="/cart/">
                <i className="cart"></i>
                <p>购物车</p>
              </NavLink>
            </li>
           <li>
              <NavLink activeClassName="sele" to="/my/">
                <i className="member"></i>
                <p>我的</p>
              </NavLink>
            </li>
          </ul>
         </div>
        </footer>
      );
  }
}

export default Footer

  
  
