// 注意: 这里的 this  就是 ctx.response
let responseExtend = {
  testExtend() {
    return 'It\'s extend function. ';
  }
}

module.exports = responseExtend;
