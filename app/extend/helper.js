let helperExtend = {
  testExtend() {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    return 'It\'s extend function. ';
  }
}

module.exports = helperExtend;
