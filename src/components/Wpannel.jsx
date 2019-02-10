// import React from "react";
// import {Link} from "react-router-dom";
// // import axios from 'axios';
//   class Wpannel extends React.Component{
//       constructor(props){
//         super(props);
//         this.props=props;
//         this.state={
//             cards:[]
//         }
//       }
      
//       getIndexInfo(){
//         React.axios.get('./jsons/index.json')
//         .then((res)=>{
           
//             console.log(res)
//             this.setState({
//               cards:res.data.data.cards
//             })
//         })
//        .catch((error)=>{
//           console.log(error);
//         });
//       }
//       componentDidMount(){
//         this.getIndexInfo();
//         window.onscroll=(e)=>{
//           console.log(e)
//         }
//       }
//       render(){
//          return (
//               <div className="pannelwrap" style={{
//                   paddingTop:"0px",
//                   paddingBottom:"0px",
//                   marginTop:"84px"
//               }}>
//               {(()=>{
//                   return this.state.cards.map((item,index)=>{
//                     return (
//                              <div  key={index} className="wb-item-wrap">
//                                    <div  className="wb-item">
//                                     <div  className="card m-panel card9 f-weibo">
//                                      <div className="card-wrap">
                                       
//                                       <header className="weibo-top m-box">
//                                        <div className="m-avatar-box m-box-center">
//                                        <Link to="/detail/" className="m-img-box">
//                                         <img src={item.mblog.user.avatar_hd} alt="avatar" />
//                                       </Link>
//                                        </div> 
//                                        <div className="m-box-dir m-box-col m-box-center">
//                                         <div className="m-text-box">
//                                          <a href="/profile/1788283193" className=""><h3 className="m-text-cut">{
//                                                 item.mblog.user.screen_name
//                                               }
//                                             <i className="m-icon m-icon-vipl6"></i></h3></a> 
//                                          <h4 className="m-text-cut"><span className="time">{item.mblog.created_at}</span> <span className="from"> 来自 {item.mblog.source}</span> 
//                                           </h4>
//                                         </div>
//                                        </div> 
//                                        <div callback="follow()" className="m-add-box m-followBtn">
//                                         <span className="m-add-box"><i className="m-font m-font-plus"></i> <h4>关注</h4></span>
//                                        </div>
//                                       </header>
//                                      </div> 
//                                      <article className="weibo-main">
//                                       <div className="card-wrap">
//                                        <div className="weibo-og">
//                                         <div className="weibo-text"  dangerouslySetInnerHTML = {{__html:item.mblog.text}}>
                                         
//                                         </div> 
//                                         <div >
//                                          <div  className="weibo-media-wraps weibo-media f-media media-b">
//                                           <ul  className="m-auto-list">
//                                            <li  className="m-auto-box2">
//                                             <div  className="m-img-box m-imghold-4-3">
                                              
//                                              <img  src="https://wx2.sinaimg.cn/orj360/6a970939ly1fxmomvsxxjj20qo0zkk4v.jpg" className="f-bg-img"  alt=""/> 
                                             
//                                             </div></li>
//                                            <li  className="m-auto-box2">
//                                             <div  className="m-img-box m-imghold-4-3">
                                              
//                                              <img  src="https://wx4.sinaimg.cn/orj360/6a970939ly1fxmon8w1dwj20qo0zkx3v.jpg" className="f-bg-img" alt="" /> 
                                             
//                                             </div></li>
//                                            <li  className="m-auto-box2">
//                                             <div  className="m-img-box m-imghold-4-3">
                                              
//                                              <img  src="https://wx2.sinaimg.cn/orj360/6a970939ly1fxmoo2p2cej20qo0zk4os.jpg" className="f-bg-img" alt="" /> 
                                             
//                                             </div></li>
//                                            <li  className="m-auto-box2">
//                                             <div  className="m-img-box m-imghold-4-3">
                                              
//                                              <img  src="https://wx4.sinaimg.cn/orj360/6a970939ly1fxmonti47cj20qo0zknlo.jpg" className="f-bg-img" alt="" /> 
                                             
//                                             </div></li>
//                                           </ul>
//                                          </div>
//                                         </div>
//                                        </div>
//                                       </div> 
                                      
//                                      </article> 
//                                      <footer className="f-footer-ctrl">
//                                       <div className="m-diy-btn m-box-center-a">
//                                        <i className="lite-iconf lite-iconf-report"></i> 
//                                        <h4>2.9万</h4>
//                                       </div> 
//                                       <div className="m-diy-btn m-box-center-a">
//                                        <i className="lite-iconf lite-iconf-comments"></i> 
//                                        <h4>2.1万</h4>
//                                       </div> 
//                                       <div className="m-diy-btn m-box-center-a">
//                                        <i className="lite-iconf lite-iconf-like"></i> 
//                                        <h4>4万</h4>
//                                       </div> 
//                                       <aside>
//                                        <i className="m-font m-font-dot-more"></i>
//                                       </aside>
//                                      </footer>
//                                     </div>
//                                    </div>
//                                 </div>

//                       )
//                   })
//               })()
//         }



               
//               </div>
                
//           )
//       }
//   }
// export default Wpannel
 
