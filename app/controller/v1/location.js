'use strict';

const Controller = require('egg').Controller;

class LocationController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, qweqweqwewe';
  }
}

module.exports = LocationController;
