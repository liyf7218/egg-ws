'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {

  // 获取动态路由
  async operate() {
    const {ctx} = this;
    const {operate} = ctx.params;

    if (operate && (operate in this)) {
      console.log('==========> app/controller/test.js operate: ' + operate);
      await this[operate]();
      return;
    }

    // 不然就把 operate 直接打印出来
    ctx.body = ctx.params;
  }

  async index() {
    const {ctx} = this;
    ctx.body = 'test';
  }

  // 获取get传值
  async query() {
    const {ctx} = this;
    ctx.body = ctx.query;
  }

  // 获取 post 类型请求的数据
  async post() {
    const {ctx} = this;
    ctx.body = ctx.request.body;
  }

  // 获取模板引擎
  async template() {
    const {ctx} = this;

    // 查看 app/view/index.html
    await ctx.render('index', {path: 'app/view/index.html'});
  }

  // 通过 service 获取数据
  async service() {
    const {ctx, service} = this;

    // 查看 app/service/test.js
    let list = await service.test.getList();

    ctx.body = list;
  }

  // 调用插件扩展
  async extend() {
    const {ctx, app} = this;

    // 查看 app/extend/application.js
    ctx.body = app.testExtend();
  }

  // 获取数据库中的 test 集合的数据,查看以下配置:
  // 1. plugin.js ==> exports.mongoose
  // 2. config.default.js ===> config.mongoose
  // 3. app/model/test.js ===> 具体的 mongoose 配置文件, 取数据库 studio 中的数据
  async findAll() {
    const {ctx, service} = this;
    ctx.body = await service.test.findAll()
  }

  async upload(){
    const {ctx, service} = this;

    // 保存上传的文件
    let fileList = await service.upload.index();
    // 解析文件
    let jsonSheet = await service.parseExcel.index(fileList);

    ctx.status = 200;
    ctx.body = jsonSheet;
  }

}

module.exports = TestController;
