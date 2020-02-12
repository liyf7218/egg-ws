/*
  参数:
    options: 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来。
    app: 当前应用 Application 的实例。
*/
module.exports = (options, app) => {

  // 通过中间件配置项,判断是否启用此中间件,查看 config/config.default.js
  if(!options.enable){
    return async function jump(ctx, next) {
      await next();
    }
  }

  return async function test(ctx, next){
    console.log('==========> app/middleware/test.js 使用中间件拦截请求.');
    await next();
  }
}
