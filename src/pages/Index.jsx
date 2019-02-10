import React,{Component} from 'react';
// import {Route} from 'react-router-dom';
import Mheader from '../components/Wheader.jsx';
import Homecontent from './Homecontent.jsx';
// import { Route , withRouter , Link , Router} from "react-router-dom"
import Footer from '../components/Footer.jsx';


class Index extends Component{
	constructor(props){
		super(props);
		this.props=props;
		// console.log(this.props);
	}
	render(){
		return (
			<div>
				<Mheader/>
				<Homecontent />
				<Footer/>

			</div>
		);
	}
}

export default Index;