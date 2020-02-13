'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // home
  router.get('/', controller.home.index);
  router.post('/', controller.home.index);

  // people
  router.post('/people', controller.people.index);
  router.post('/people/:operate', controller.people.operate);

  // test
  router.post('/test', controller.test.index);
  router.post('/test/:operate', controller.test.operate);

};
