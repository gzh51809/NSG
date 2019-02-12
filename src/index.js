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
// http请求拦截器
axios.interceptors.request.use((config) => {
  Toast.loading('', 3,true);
  //  在发送请求之前做一些事情
    return config;
}, (err) => {
    return Promise.reject(err)
})
// http响应拦截器
axios.interceptors.response.use((response) => {
    Toast.hide(); //关闭loading
    //  用响应数据做一些事情
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
