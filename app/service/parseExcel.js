const Service = require('egg').Service;
const XLSX = require('xlsx');
const path = require('path');

class PeopleService extends Service {
  async index(fileList, options = {}) {

    //如果没有传文件进来,或者是空文件,直接报错
    if(!(fileList && fileList.length)){
      throw new Error("Error content in sheet.");
    }

    let localPath = fileList[0].localPath ||
      path.join(this.config.baseDir, 'app/public/uploads', fileList[0].name);

    // 用 sheetjs/xlsx 解析excel文件
    let workbook = XLSX.readFile(localPath);

    let first_sheet_name = workbook.SheetNames[0];

    /* Get worksheet */
    let worksheet = workbook.Sheets[first_sheet_name];

    // 将表格转换成json格式
    let result = XLSX.utils.sheet_to_json(worksheet);

    return result;
  }
}

module.exports = PeopleService;
