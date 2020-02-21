// app/service/people.js
const Service = require('egg').Service;

class PeopleService extends Service {
  async index(params = {}) {
    let {ctx} = this;
    return await ctx.model.People.find({}, {__v:0 });
  }
  async show(id) {
    let {ctx} = this;
    return await ctx.model.People.findById(id, {__v:0});
  }
  async create(params) {
    let {ctx} = this;
    let result = new ctx.model.People(params);
    return await result.save();
  }
  async update(id, payload = {}) {
    let {ctx} = this;
    return await ctx.model.People.findByIdAndUpdate(id, payload, {
      // true to return the modified document rather than the original. defaults to false
      new: true
    });
  }
  async destroy(id) {
    let {ctx} = this;
    return await ctx.model.People.findByIdAndRemove(id, {
      useFindAndModify: false
    });
  }

}

module.exports = PeopleService;
