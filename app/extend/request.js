// 注意: 这里的 this  就是 ctx.request
let requestExtend = {
  testExtend() {
    return 'It\'s extend function. ';
  }
}

module.exports = requestExtend;
