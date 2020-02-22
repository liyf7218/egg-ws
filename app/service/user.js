const Service = require('egg').Service;

class UserService extends Service {
  async index(params = {}) {
    let {ctx} = this;
    return await ctx.model.User.find({}, {__v:0 });
  }
  async show(id) {
    let {ctx} = this;
    return await ctx.model.User.findById(id, {__v:0});
  }
  async create(params) {
    let {ctx} = this;
    let result = new ctx.model.User(params);
    return await result.save();
  }
  async update(id, payload = {}) {
    let {ctx} = this;
    return await ctx.model.User.findByIdAndUpdate(id, payload, {
      new: true
    });
  }
  async destroy(id) {
    let {ctx} = this;
    return await ctx.model.User.findByIdAndRemove(id, {
      useFindAndModify: false
    });
  }

}

module.exports = UserService;
