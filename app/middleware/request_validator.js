const validateRules = {
  people: {
    name: 'string',
    birthday: 'date',
    gender: [
      'male', 'female', 'unknown'
    ],
    phone: 'string',
    email: 'email'
  }
};

module.exports = (options, app) => {
  return async function request_validator(ctx, next) {
    let {request} = ctx;
    if (request.method == 'POST' || request.method == 'PUT') {
      // 获取当前路径,以找到对应的controller
      let controller = request.path.split('/').reverse()[0];
      ctx.validate(validateRules[controller], request.body)
    }
    await next();
  }
}
