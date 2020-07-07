'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiV1Router = router.namespace('/api/v1');

  // home
  router.get('/', controller.home.index);
  router.post('/', controller.home.index);

  // test
  router.post('/test/:operate', controller.test.operate);

  // 上传文件
  apiV1Router.post('/upload', controller.v1.upload.index);

  // 版本接口 /api/v1
  apiV1Router.resources('people', '/people', controller.v1.people);
  apiV1Router.post('/people/upload', controller.v1.people.upload);
  apiV1Router.post('/people/delete', controller.v1.people.destroyMany);
  apiV1Router.resources('user', '/user', controller.v1.user);

  // 获取国家和地区的数据
  apiV1Router.resources('area', '/area', controller.v1.area);
  apiV1Router.post('/area/upload', controller.v1.area.upload);
  apiV1Router.post('/area/delete', controller.v1.area.destroyMany);

  // 获取省市县的数据
  apiV1Router.resources('city', '/city', controller.v1.city);
  apiV1Router.post('/city/upload', controller.v1.city.upload);
  apiV1Router.post('/city/delete', controller.v1.city.destroyMany);

  // 获取大学的数据
  apiV1Router.resources('university', '/university', controller.v1.university);
  apiV1Router.post('/university/upload', controller.v1.university.upload);
  apiV1Router.post('/university/delete', controller.v1.university.destroyMany);

};
