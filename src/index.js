import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router} from "react-router-dom";

//引入antd-mobile
import { Toast } from 'antd-mobile';
import '../node_modules/antd-mobile/dist/antd-mobile.css'


import axios from 'axios';
import App from './App';

import * as serviceWorker from './libs/serviceWorker';
React.axios = axios;
//使用
axios.interceptors.request.use((config) => {
  Toast.loading('', 3,true);
    return config;
}, (err) => {
    return Promise.reject(err)
})
axios.interceptors.response.use((response) => {
    Toast.hide(); //关闭loading
    return response;
}, (err) => {
    return Promise.reject(err);
})

ReactDOM.render(

		 <Router>
            <App />
        </Router>,

	document.getElementById('root')
)

serviceWorker.unregister();
