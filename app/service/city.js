const Service = require('egg').Service;

class CityService extends Service {
  async index(params = {}) {
    let {ctx} = this;
    return await ctx.model.City.find({}, {__v:0 });
  }

  async show(id) {
    let {ctx} = this;
    return await ctx.model.City.findById(id, {__v:0});
  }

  async create(docs) {
    let {ctx} = this;
    if(!(docs instanceof Array)){
      docs = [docs]
    }
    return await ctx.model.City.insertMany(docs);
  }

  async update(id, payload = {}) {
    let {ctx} = this;
    return await ctx.model.City.findByIdAndUpdate(id, payload, {
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
    return await ctx.model.City.deleteMany({ _id: { $in: ids } });
  }

}

module.exports = CityService;
