const Service = require('egg').Service;
const fs = require('mz/fs');
const path = require('path');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class UploadService extends Service {
  async index(options = {
    showLocalPath: true
  }) {
    let {ctx} = this;
    // 使用 egg-multipart 上传文件
    const parts = ctx.multipart();
    let part;
    let result = [];
    // parts() 返回 promise 对象
    while ((part = await parts()) != null) {
      let length = 0;
      if (part.length) {
        // 如果有其他参数,在这里不进行获取,直接跳过
        length = part[1];
      } else {
        // 获取其他参数
        // 没有文件就拉屁倒
        if (!part.filename) return;
        // 处理文件流
        let file = {};
        file.name = part.filename;
        file.type = part.mimeType;
        // 保存地址
        file.localPath = path.join(this.config.baseDir, `app/public/test/${part.filename}`);
        // 创建写入流
        let writable = await fs.createWriteStream(file.localPath);

        try {
            //异步把文件流 写入
            await awaitWriteStream(part.pipe(writable));
        } catch (err) {
            //如果出现错误，关闭管道
            await sendToWormhole(part);
            throw err;
        }
        // 注意,这里只能是 http 协议,使用安全协议不给访问.
        file.path = 'http://127.0.0.1:7001/public/uploads/' + part.filename;

        // 是否返回文件在服务器上的地址
        if(!options.showLocalPath){
          delete file.localPath;
        }

        result.push(file);
      }
    }

    return result;

  }
}

module.exports = UploadService;
