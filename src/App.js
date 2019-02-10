import React, { Component } from 'react';
import { Route,Switch,Redirect} from "react-router-dom";
// import Footer from './components/Footer.jsx';
import Index from './pages/Index.jsx'; 
import Cart from './pages/Cart/cart.jsx';
import Classify from './pages/classify/classify.jsx';
import News from './pages/news/news.jsx';
import User from './pages/user/user.jsx'; 
import Detail from './pages/Details/details.jsx';
import GoodsList from './pages/goodslist/goodslist.jsx';
import Detailsimg from './pages/Details/detailsImg.jsx';
import Evaluate from './pages/Details/evaluate.jsx';



class App extends Component { 
  render() {
    return (
      	<div className="App">
      		{/*<Redirect exact from='/' to='/home/'/>*/}
      		<Switch>

          <Route path="/home/"  component={Index} />

        	<Route path="/cart/" component={Cart} />

          	<Route path="/classify/" component={Classify} />
          	<Route path="/news/" component={News} />
          	
          <Route path="/classify/" component={Classify} />
          <Route path="/my/" component={User} />
			    <Route path = '/details/:id' component = {Detail} />
          <Route path = '/details/:index/:id' component = {Detail} />


          <Route path="/detailsimg/:id" component={Detailsimg} />
          <Route path="/evaluate/:id" component={Evaluate} />

          <Route path="/goodslist/:id" component={GoodsList} />
          <Redirect to="/home"/>
          </Switch>

      </div>
    );
  }
}

export default App;
