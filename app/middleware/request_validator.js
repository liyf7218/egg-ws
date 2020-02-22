'use strict';

let fs = require('fs');
let path = require('path');
let exec = require('child_process').exec;

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    let fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList); //递归读取文件
    } else {
      filesList.push(fullPath);
    }
  });
  return filesList;
}

// 获取所有验证规则
let filesList = readFileList(path.join(__dirname, "../validator"));
let validateRules = filesList.reduce((res, item) => {
  let validateRule = require(item);
  let property = path.basename(item).split('.')[0];
  res[property] = require(item);
  return res;
}, {});

module.exports = (options, app) => {
  return async function request_validator(ctx, next) {
    // 开始处理业务逻辑
    let {request} = ctx;
    let {method, path, body} = request;
    // 获取当前路径,以找到对应的controller
    if (method == 'POST' || method == 'PUT') {
      let controllerReverseIndex = (
        method == 'POST'
        ? 0
        : 1);
      let controller = path.split('/').reverse()[controllerReverseIndex];
      if (controller in validateRules) {
        ctx.validate(validateRules[controller], body);
      }
    }
    await next();
  }
}
