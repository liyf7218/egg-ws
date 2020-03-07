module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const connect = app.mongooseDB.get('db_local');

  const AreaSchema = new Schema({
    abbr: {
      type: String,
      required: true
    },
    abbr_en: String,
    name_en: String,
    code_2: String,
    code_3: String,
    code_num: String,
    desc: String,
  });

  return connect.model('Area', AreaSchema, 'area');
}
