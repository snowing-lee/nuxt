module.exports = {
  /*
  ** Headers of the page
  */

  // 默认head标签 (默认的)
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['~assets/css/normailze.css'],
  /*
  ** Customize the progress bar color
  */

  // 加载时颜色
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  // 插件的形式
  build: {
    loaders: [
      {
        test: /\.(png|jpg?g|gif|svg)$/,
        loader: 'url-loader', // 需要安装url-loader  : npm install url-loader --save
        query: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

