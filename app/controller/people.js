'use strict';
const Controller = require('../core/base_controller');

class PeopleController extends Controller {
  async list() {
    const {ctx, service} = this;
    ctx.body = await service.people.list();
  }

  async get() {
    const {ctx, service} = this;
    let docs = await service.people.get(ctx.request.body.id);
    this.setBody(docs);
  }

  async save() {
    const {ctx, service} = this;
    ctx.body = await service.people.save(ctx.request.body);
  }

  async update() {
    const {ctx, service} = this;
    let  {id, ...payload} = ctx.request.body;
    let docs = await service.people.update(id, payload);
    this.setBody(docs);
  }

  async delete() {
    const {ctx, service} = this;
    let {id} = ctx.request.body;
    let docs = await service.people.delete(id);
    this.setBody(docs);
  }
}

module.exports = PeopleController;
