'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiRouter = app.router.namespace('/api/v1');

  // home
  router.get('/', controller.home.index);
  router.post('/', controller.home.index);

  // test
  router.post('/test/:operate', controller.test.operate);

  // people
  apiRouter.resources('people', '/people', controller.people);

  //

};
