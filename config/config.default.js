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
  config.middleware = ['responseFormatter', 'requestValidator'];

  // 格式化返回的数据
  // config.responseFormatter = {
  //   enable: true
  // };

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

  // 上传文件配置
  config.multipart = {
    fileSize: '50mb',
    // will append to whilelist
    fileExtensions: [
      '.xls',
      '.xlsx',
    ],
  };

  // 统一错误处理
  config.onerror = {
    all(err, ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      let {
        code,
        message,
        errors
      } = err;
      ctx.logger.error(err);

      let responseBody = {
        code: 500,
        message
      }

      // 处理验证错误
      if (message == "Validation Failed") {
        ctx.status = 422;
        responseBody.code = 422;
        responseBody.errors = errors;
      }

      //必须先设置返回数据类型,否则只能默认赋值成字符串,改成别的不行
      ctx.set('Content-Type', 'application/json');
      let headerAccept = ctx.accepts("application/json", "json", "html", "text/plain");
      switch (headerAccept) {
        case "json":
        case "application/json":
          ctx.body = JSON.stringify(responseBody);
          break;
        case "html":
        case "text/plain":
          ctx.body = responseBody;
          break;
        default:
          ctx.body = responseBody;
      }
      ctx.status = 500;
    }
  };

  // Merge all parameters (ctx.params, ctx.request.query, ctx.request.body) into ctx.params
  config.parameters = {
    logParameters: true,
    // param names that you want filter in log.
    filterParameters: ['password'],
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

  // 格式验证工具
  config.validate = {
    // convert: false,
    // validateRoot: false,
  };

  // 配置模板引擎(插件) ejs
  config.view = {
    mapping: {
      '.html': 'ejs'
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    baseDir: require('path').join(__dirname, '..')
  };

  return {
    ...config,
    ...userConfig
  };
};
