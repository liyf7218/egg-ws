'use strict';
const Controller = require('egg').Controller;

class UploadController extends Controller {
  async index() {
    const {ctx, service} = this;
    ctx.body = await service.upload.index();
  }
}

module.exports = UploadController;
