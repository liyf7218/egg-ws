'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiV1Router = app.router.namespace('/api/v1');

  // home
  router.get('/', controller.home.index);
  router.post('/', controller.home.index);

  // test
  router.post('/test/:operate', controller.test.operate);

  // 版本接口 /api/v1
  apiV1Router.resources('people', '/people', controller.v1.people);
  apiV1Router.resources('user', '/user', controller.v1.user);

};
