'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  cors: {
    // 配置跨域问题
    enable: true,
    package: 'egg-cors'
  },
  ejs: {
    // 配置 html 模板
    enable: true,
    package: 'egg-view-ejs'
  },
  mongoose: {
    // 配置 mongodb 数据库
    enable: true,
    package: 'egg-mongoose'
  },
  parameters: {
    // Merge all parameters (ctx.params, ctx.request.query, ctx.request.body) into ctx.params
    enable: true,
    package: 'egg-parameters',
  },
  routerPlus: {
    // 配置路由
    enable: true,
    package: 'egg-router-plus'
  },
  validate: {
    // 格式验证工具
    enable: true,
    package: 'egg-validate'
  },

};
