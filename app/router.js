'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // home
  router.get('/', controller.home.index);
  router.post('/', controller.home.index);

  // test
  router.post('/test/:operate', controller.test.operate);

  // people
  router.post('/people/:operate', controller.people.operate);

  //

};
