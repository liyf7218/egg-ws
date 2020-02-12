'use strict';

const Controller = require('egg').Controller;

class PeopleController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.body = await service.people.findAll();
  }

  // 获取动态路由
  async operate() {
    const { ctx } = this;
    const { operate } = ctx.params;

    if(operate && (operate in this)){
      console.log('==========> app/controller/people.js operate: ' + operate);
      await this[operate]();
      return;
    }

    // 不然就把 operate 直接打印出来
    ctx.body = ctx.params;
  }
}

module.exports = PeopleController;
