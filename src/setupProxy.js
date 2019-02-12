const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: "http://localhost:3000/",
        pathRewrite: {'^/api': ''},
        changeOrigin: true
    }));
    // app.use(proxy('/api', {
    //     target: "https://www.fakin.cn/",
    //     pathRewrite: {'^/api': ''},
    //     changeOrigin: true
    // }));
};