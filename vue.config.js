module.exports = {
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 8080,
        // proxy: {
        //     '/': {
        //         target: 'http://192.168.157.131',
        //         changeOrigin: true
        //     }
        // }
    },
    pages: {
        main: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.htm',
            title: '管理系统',
        },
        login: {
            entry: 'src/login/main.js',
            template: 'public/login.html',
            filename: 'security',
            title: '登录',
        }
    }

}