'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Oops! You get me!!';
  }
}

module.exports = HomeController;
