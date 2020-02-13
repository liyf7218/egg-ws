'use strict';

const Controller = require('egg').Controller;

class PeopleController extends Controller {
  async index() {
    const {ctx, service} = this;
    ctx.body = "Oops! You get people.";
  }

  // 获取动态路由
  async operate() {
    const {ctx} = this;
    const {operate} = ctx.params;

    if (operate && (operate in this)) {
      console.log('==========> app/controller/people.js operate: ' + operate);
      await this[operate]();
      return;
    }

    // 不然就把 operate 直接打印出来
    ctx.body = ctx.params;
  }

  async list() {
    const {ctx, service} = this;
    ctx.body = await service.people.list();
  }

  async get() {
    const {ctx, service} = this;
    ctx.body = await service.people.get(ctx.request.body.id);
  }

  async save() {
    const {ctx, service} = this;
    ctx.body = await service.people.save(ctx.request.body);
  }

  async update() {
    const {ctx, service} = this;
    ctx.body = await service.people.update();
  }

  async delete() {
    const {ctx, service} = this;
    ctx.body = await service.people.delete();
  }
}

module.exports = PeopleController;
