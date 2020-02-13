// app/service/people.js
const Service = require('egg').Service;

class PeopleService extends Service {
  async list(params = {}) {
    let {ctx} = this;
    return await ctx.model.People.find({});
  }
  async get(id) {
    let {ctx} = this;
    let res = await ctx.model.People.findById(id);
    return res;
  }
  async save(params = {}) {
    let {ctx} = this;
    let newInstance = new ctx.model.People(params);
    return await newInstance.save();
  }
  async update(params = {}) {
    let {ctx} = this;
    return await ctx.model.People.find({});
  }
  async delete(id) {
    let {ctx} = this;
    return await ctx.model.People.find({});
  }

}

module.exports = PeopleService;
