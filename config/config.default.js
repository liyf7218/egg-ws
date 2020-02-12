/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1581317661552_9907';

  // 增加配置中间件,这里是用来管是否要 动用 某个中间件的,只有写在 app/middleware 下的中间件才行
  config.middleware = ['test'];

  // 配置自定义中间件 test
  config.test = {
    enable: false
  };

  // 配置模板引擎(插件) ejs
  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  };

  // 配置跨域
  config.security = {
    domainWhiteList: ['http://localhost:8080'],
    methodnoallow: {
      enable: false
    },
    xframe: {
      enable: false
    },
    // 屏蔽 egg.js 自带的csrf功能
    csrf: {
      enable: false,
      headerName: 'x-csrf-token',
      ignoreJSON: false
    }
  };

  // 配置 mongodb 数据库
  config.mongoose = {
    clients: {
      // clientId, access the client instance by app.mongooseDB.get('clientId')
      db_local: {
        url: 'mongodb://127.0.0.1:27017/studio',
        options: {
          useUnifiedTopology: true
        },
        // mongoose global plugins, expected a function or an array of function and options
        // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
      },
      db_another: {
        url: 'mongodb://127.0.0.1:27017/studio',
        options: {
          useUnifiedTopology: true
        },
        // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
      }
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
