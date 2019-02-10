import React from "react";
import '../styles/header.less';


class Mheader extends React.Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  
  render(){
    return (
          <header id="header">
              <div className="logo"> </div>
                <div className="header-wrap"> 
                  <i className="search_l"></i>
                  <input  type="search" className="search" />
                </div>
                <div className="header-r">
                  <a id="header-nav" href="tmpl/member/order_list.html">
                    <i> </i>
                  </a>
              </div>
          </header>
        
      );
  }
}


export default Mheader