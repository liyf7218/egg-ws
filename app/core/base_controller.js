const {Controller} = require('egg');
class BaseController extends Controller {
  // 获取动态路由
  async operate() {
    const {ctx} = this;
    const {operate} = ctx.params;

    if (operate && (operate in this)) {
      console.log(`[app/controller operate] ${ctx.url}`);
      await this[operate]();
      return;
    }

    // 不然就把 operate 直接打印出来
    throw new Error(`[Error] Path not found: ${ctx.url}`);
  }

  setBody(docs) {
    const {ctx} = this;
    if(!docs){
      throw new Error('Data not found!');
    }
    ctx.body = docs;
  }
}
module.exports = BaseController;
