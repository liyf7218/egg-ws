'use strict';

const Controller = require('egg').Controller;

class EventController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, qweqweqwewe';
  }
}

module.exports = EventController;
