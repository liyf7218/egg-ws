'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  ejs: {
    // 配置 html 模板
    enable: true,
    package: 'egg-view-ejs'
  },
  cors: {
    // 配置跨域问题
    enable: true,
    package: 'egg-cors'
  },
  mongoose: {
    // 配置 mongodb 数据库
    enable: true,
    package: 'egg-mongoose'
  }

};
