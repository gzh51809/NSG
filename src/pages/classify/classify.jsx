import React, { Component } from "react";
import "../../styles/classify.less";
import Mheader from "../../components/Wheader.jsx";

import { Link,NavLink } from "react-router-dom";

import Footer from '../../components/Footer.jsx';


class Classify extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      cards: [],
      class_list: [],
      goods_list: [],
      nav: '',
      index:''
    };
  }
  getData() {
    React.axios
      .get("https://www.nanshig.com/mobile/index.php?act=goods_class")
      .then(res => {
        // console.log(res);
        // console.log(res.data.datas.class_list);
        this.setState({
          cards: res.data.datas.class_list
        });
        // console.log(this.state.cards);
      })
      .catch(error => {
        console.log(error);
      });
  }
  getClassData() {

    React.axios
      .get(
        "https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=256"
      )
      .then(res => {
        // console.log(123,res);
        this.setState({
          class_list: res.data.datas.class_list[0].child,
          nav:res.data.datas.class_list[0].gc_name
        });
        // console.log(this.state.class_list);
      })
      .catch(error => {
        console.log(error);
      });
  }
  getGoodData() {
    React.axios
      .get(
        "https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=256&page=20"
      )
      .then(res => {
        // console.log(res);
        this.setState({
          goods_list: res.data.datas.goods_list
        });
        // console.log(this.state.goods_list);
      })
      .catch(error => {
        console.log(error);
      });
  }


  navigateTo(e,index) {

    this.setState({
      index:index
    })
    console.log(this.state.index===index)

		let ggcId = e.target.innerHTML;
		let gc_id;

		console.log('e======', e.target.innerHTML)
		if(ggcId === '上装') {
			gc_id = 256;

		}else if (ggcId === '下装') {
			gc_id = 2
		}else if(ggcId==='鞋靴'){
      gc_id=1
    }else if(ggcId==='美妆'){
      gc_id=470
    }else if(ggcId==='套装'){
      gc_id=3
    }
    React.axios
      .get(
        `https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=${gc_id}`
      )
      .then(res => {
        // console.log(res);
        this.setState({
          class_list: res.data.datas.class_list[0].child,
          nav:res.data.datas.class_list[0].gc_name,
          // index:index
        });
        // console.log(this.state.index);
      })
      .catch(error => {
        console.log(error);
      });

      React.axios
      .get(
        `https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=${gc_id}&page=20`
      )
      .then(res => {
        // console.log(res);
        this.setState({
          goods_list: res.data.datas.goods_list
        });
        // console.log(this.state.goods_list);
      })
      .catch(error => {
        console.log(error);
      });
	}


  componentDidMount() {
    this.getData();
    this.getClassData();
    this.getGoodData();
  }
  render() {
    return (
      <div className="classify">
        <Mheader />
        <div className="classify_header" id="categroy-cnt">
          <ul className="categroy-list">
            {(() => {
              return this.state.cards.map((item, index) => {
                return (
                  <li key={index} className="category-item selected" >
                    <div
                      onClick={e => {
                        this.navigateTo(e,index);
                      }}
                      className=" category-item-a category "
                      className={this.state.index===index ?"sele ":""}
                    >
                      <div className="ci-fcategory-ico"> </div>
                      <div className="ci-fcategory-name ggcId" >
                        {item.gc_name}
                      </div>
                    </div>
                  </li>
                );
              });
            })()}
          </ul>
        </div>

        <div className="categroy" id="categroy">
          <dl className="categroy-child-list">
            <dt className="categroy_title">
              <a href="#">
                <i className="col" />{this.state.nav}<i className="arrow-r"> > </i>
              </a>
            </dt>
            {(() => {
              return this.state.class_list.map((item, idx) => {
                // console.log('item',item)
                return (
                  <dd key={idx}>
                    <Link to={`/goodslist/${item.gc_id}/`}>
                      <img src={item.gc_image} alt="" />
                      <p>{item.gc_name}</p>
                    </Link>
                  </dd>
                );
              });
            })()}
          </dl>
          <dl className="categroy-child-list" />
        </div>

        <div id="product_list">
          <p className="goods_recommend">商品推荐</p>
          <div className="goods_list">
            <ul>
              {(() => {
                return this.state.goods_list.map((item, index) => {
                  return (
                    <li key={index}>
                     <Link to={`/details/${item.goods_id}/`}>
                        <div className="good_img">
                          <img src={item.goods_image_url} alt="" />
                        </div>
                        <div className="good_tip">
                          <p className="good_title">{item.goods_name}</p>
                          <p className="good_price">
                            <span> ￥</span>
                            <span>{item.goods_price}</span>
                          </p>
                        </div>
                    </Link>
                      
                    </li>
                  );
                });
              })()}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Classify;
