module.exports = (options, app) => {
  return async function format_response(ctx, next) {
    await next();
    if(!ctx.body){
      console.log('===============> body empty');
    }
    ctx.body = {
      code: 200,
      message: ctx.message || '操作成功!',
      data: ctx.body || ""
    }
  }
}
