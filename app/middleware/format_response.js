module.exports = (options, app) => {
  return async function format_response(ctx, next){
    await next();
    let {body: data, message} = ctx;
    ctx.body = {
      code: 200,
      message: message || '操作成功!',
      data
    }
  }
}
