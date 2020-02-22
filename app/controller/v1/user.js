'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const {ctx, service} = this;
    ctx.body = await service.user.index();
  }

  async show() {
    const {ctx, service} = this;
    ctx.body = await service.user.show(ctx.params.id);
  }

  async create() {
    const {ctx, service} = this;
    ctx.body = await service.user.create(ctx.request.body);
    ctx.status = 201;
  }

  async update() {
    const {ctx, service} = this;
    ctx.body = await service.user.update(ctx.params.id, ctx.request.body);
  }

  async destroy() {
    const {ctx, service} = this;
    ctx.body = await service.user.destroy(ctx.params.id);
  }
}

module.exports = UserController;
