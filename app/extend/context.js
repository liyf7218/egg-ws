let ctxExtend = {
  testExtend() {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    return 'It\'s extend function. ';
  },
  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkMongooseResult(queryInstance) {
    let ctx = this;
    // 所有的 Mongoose操作 的返回值均为 Query实例,可以进行如下操作
    queryInstance.exec(err => {
      if(err) {
        ctx.throw('500', err.message);
      }
    });
  }
}

module.exports = ctxExtend;
