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
  // 这里要统一将中间件命名为驼峰形式
  config.middleware = ['test', 'formatResponse'];

  // 配置自定义中间件 test
  config.test = {
    enable: false
  };

  // 格式化返回的数据
  config.formatResponse = {
    enable: true
  }

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

  // 统一错误处理
  config.onerror = {
    all(err, ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      let {message} = err;
      ctx.logger.error(err);
      //必须先设置返回数据类型,否则只能默认赋值成字符串,改成别的不行
      ctx.set('Content-Type', 'application/json');
      ctx.body = JSON.stringify({code: 500, message});
      ctx.status = 500;
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
