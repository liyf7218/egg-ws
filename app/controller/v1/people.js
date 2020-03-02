'use strict';
const Controller = require('egg').Controller;

class PeopleController extends Controller {
  async index() {
    const {ctx, service} = this;
    ctx.body = await service.people.index();
  }

  async show() {
    const {ctx, service} = this;
    ctx.body = await service.people.show(ctx.params.id);
  }

  async create() {
    const {ctx, service} = this;
    ctx.body = await service.people.create(ctx.request.body);
    ctx.status = 201;
  }

  async update() {
    const {ctx, service} = this;
    ctx.body = await service.people.update(ctx.params.id, ctx.request.body);
  }

  async destroy() {
    const {ctx, service} = this;
    ctx.body = await service.people.destroy(ctx.params.id);
  }

  async upload() {
    const {ctx, service} = this;

    // 保存上传的文件
    let fileList = await service.upload.index();

    // 解析文件
    let jsonSheet = await service.parseExcel.index(fileList);

    ctx.body = await service.people.create(jsonSheet);
    ctx.status = 201;
  }

  async destroyMany(){
    const {ctx, service} = this;
    let {ids = ''} = ctx.request.body;
    ctx.body = await service.people.destroy(ids);
  }

}

module.exports = PeopleController;
