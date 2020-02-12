// app/service/people.js
const Service = require('egg').Service;

class PeopleService extends Service {
  async findAll() {
    let { ctx } = this;
    return await ctx.model.People.find({});
  }
  async list(params = {}) {
    let { ctx } = this;
    return await ctx.model.People.find({});
  }

}

module.exports = PeopleService;
