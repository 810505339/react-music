const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        }
    ],
    webpack: {
        alias: {
            '@@': pathResolve('.'),
            '@': pathResolve('src'),
            '@assets': pathResolve('src/assets'),
            '@common': pathResolve('src/common'),
            '@components': pathResolve('src/components'),
            '@hooks': pathResolve('src/hooks'),
            '@views': pathResolve('src/views'),
            '@store': pathResolve('src/store'),
            '@utils': pathResolve('src/utils')
            // 此处是一个示例，实际可根据各自需求配置
        }
    },
    babel: {
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true  //设置为true即是less
                }
            ]
        ]
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://123.57.176.198:3000",
                //target: 'http://192.168.9.19:8080',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}