var path=require('path');
var webpack=require('webpack');
var HTMLPlugin=require('html-webpack-plugin');
module.exports = {
    entry: {
        app:path.resolve(__dirname,'./src/index.js'),

    } ,

    output: {
        path: path.resolve(__dirname) ,
        filename: '[name].js',

    },


    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname,'./node_modules'),
            options: {
                'presets': ['react','es2015'],
                plugins: [
                    'transform-runtime',
                    'transform-decorators-legacy',
                    ['import', {"libraryName": "antd-mobile", "style": "css"}]
                ]
            }
        }, {
            test:/\.css$/,

            //loader:'style-loader!css-loader'//从右到左解析
      /*      exclude:/node_modules/,*/
            use:['style-loader','css-loader',
               /* {
                    loader:'css-loader',
                    options:{
                        modules:true
                    }

                },*/

                {
                    loader:'postcss-loader',

                    options:{

                        plugins:[require('precss'),require('autoprefixer')],

                        browser:['last 5 versions']

                    }

                }

            ]

        },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }

        ]

    },
    devServer: {

        inline: true,//实时刷新
      
        proxy: {

            // 将 `/api` 开头的 http 请求，都代理到 `localhost:3000` 上，由 koa 提供 mock 数据
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false
            }
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
    ]


/*    plugins: [
        new htmlWebpackPlugin({
            filename: 'woca1.html',
            template: __dirname + '/index.html',
            inject: 'head'
        }),

        new webpack.HotModuleReplacementPlugin(),

        new OpenBrowserPlugin({

            url:'http://localhost:8080'

        })

    ]*/

};
