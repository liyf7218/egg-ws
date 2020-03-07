const Service = require('egg').Service;

class AreaService extends Service {
  async index(params = {}) {
    let {ctx} = this;
    return await ctx.model.Area.find({}, {__v:0 });
  }

  async show(id) {
    let {ctx} = this;
    return await ctx.model.Area.findById(id, {__v:0});
  }

  async create(docs) {
    let {ctx} = this;
    if(!(docs instanceof Array)){
      docs = [docs]
    }
    return await ctx.model.Area.insertMany(docs);
  }

  async update(id, payload = {}) {
    let {ctx} = this;
    return await ctx.model.Area.findByIdAndUpdate(id, payload, {
      // true to return the modified document rather than the original. defaults to false
      new: true
    });
  }

  async destroy(ids) {
    let {ctx} = this;
    if(!(ids instanceof Array)){
      ids = ids.split(',');
    }
    console.log(ids);
    return await ctx.model.Area.deleteMany({ _id: { $in: ids } });
  }

}

module.exports = AreaService;
