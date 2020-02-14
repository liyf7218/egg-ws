// app/service/people.js
const Service = require('egg').Service;

class PeopleService extends Service {
  async list(params = {}) {
    let {ctx} = this;
    return await ctx.model.People.find({}, {__v:0 });
  }
  async get(id) {
    let {ctx} = this;
    return await ctx.model.People.findById(id, {__v:0});
  }
  async save(params = {}) {
    let {ctx} = this;
    let newInstance = new ctx.model.People(params);
    return await newInstance.save();
  }
  async update(id, payload = {}) {
    let {ctx} = this;
    return await ctx.model.People.findByIdAndUpdate(id, payload, {
      new: true
    });
  }
  async delete(id) {
    let {ctx} = this;
    return await ctx.model.People.findByIdAndRemove(id, {
      useFindAndModify: false
    });
  }

}

module.exports = PeopleService;
